import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import FilterComponent from "components/FilterComponent/FilterComponent";
import ModalAddColumn from "components/PopUp/ModalAddColumn/ModalAddColumn";
import ModalEditColumn from "components/PopUp/ModalEditColumn/ModalEditColumn";
import ModalAddCard from '../../components/PopUp/AddCard/AddCard';
import Header from "../../components/Header/Header"; 
import { openModal, closeModal } from "../../redux/modal/modalSlice";
import { deleteCard } from "../../redux/cards/cardsOpeartions";
import { editColumn, deleteColumn} from "../../redux/columns/columnsOperations";
import styles from './CurrentBoardPage.module.css';
import images from '../../images/BgImages/images';
import { useLocation } from "react-router-dom";



const CurrentBoardPage = () => {
  const location = useLocation();
    const {state} = location;
    //const boardName = state;
    console.log(state.transferedBoard)


  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal);
  const { componentName } = modalState;
  const currentBoard = useSelector((state) => state.boards.boards.current || { name: "Default", backgroundImage: "" }) || "";
  const backgroundImage = currentBoard?.backgroundImage || "";
  const currentBoardName = currentBoard.name; 
  const backendColumns = currentBoard.columns;
  const addedColumns = useSelector((state) => state.columns.columns);
  const filteredColumns = addedColumns.filter((column) => column.boardName === currentBoardName);
  const columns =  backendColumns.concat(filteredColumns);

  const uniqueColumns = Array.from(new Set(columns.map(column => column._id)))
  .map(id => columns.find(column => column._id === id));
  
  const backendCards = backendColumns.flatMap((column) => column.cards);
  const cardsAdded = useSelector((state) => state.cards.cards || []);
  const uniqueCardsAdded = cardsAdded.filter(
    (card) => !backendCards.some((backendCard) => backendCard._id === card._id)
  );
  const cardToDisplay = [
    ...backendCards,
    ...uniqueCardsAdded.filter((card) =>
      columns.some((col) => col._id === card.columnId)
    ),
  ];
  
  const [selectedColumnId, setSelectedColumnId] = useState(null);
  const [currentImage, setCurrentImage] = useState(backgroundImage);
  
  const handleOpenCardModal = (columnId) => {
    setSelectedColumnId(columnId);
    dispatch(openModal("cardModal"));
  };

  const openEditCardModal = (columnId) => {
    setSelectedColumnId(columnId);
    dispatch(openModal("editColumn"))
  }

  useEffect(() => {
    const foundImage = images.find(
      (image) =>
        image.image === backgroundImage ||
        image.tablet === backgroundImage ||
        image.mobile === backgroundImage
    );

    const updateDeviceType = () => {
      const width = window.innerWidth;

      if (foundImage) {
        if (width < 768) {
          setCurrentImage(foundImage.mobile);
        } else if (width < 1024) {
          setCurrentImage(foundImage.tablet);
        } else {
          setCurrentImage(foundImage.image);
        }
      }
    };

    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);

    return () => window.removeEventListener("resize", updateDeviceType);
  }, [backgroundImage]);

  const onDragEnd = async (result) => {
    const { destination, source,  type } = result;
  
    if (!destination) return;
  
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }
  
    if (type === "column") {
      const newColumns = Array.from(uniqueColumns);
      const [movedColumn] = newColumns.splice(source.index, 1);
      newColumns.splice(destination.index, 0, movedColumn);
  
     // dispatch(updateColumnOrder(newColumns)); // Update local state
  
      // Apel backend pentru a actualiza ordinea coloanelor
      await dispatch(editColumn({
        boardName: currentBoard.slug,
        id: movedColumn._id,
        position: destination.index,
      }));
    } else if (type === "card") {
      const startColumn = uniqueColumns.find((col) => col._id === source.droppableId);
      const endColumn = uniqueColumns.find((col) => col._id === destination.droppableId);
  
      if (startColumn === endColumn) {
        // Reordonează cardurile în aceeași coloană
        const newCards = Array.from(
          cardToDisplay.filter((card) => card.columnId === startColumn._id)
        );
        const [movedCard] = newCards.splice(source.index, 1);
        newCards.splice(destination.index, 0, movedCard);
  
        //dispatch(updateCardOrder(startColumn._id, newCards));
  
        // Apel backend pentru reordonarea cardurilor în aceeași coloană
        await dispatch(editColumn({
          boardName: currentBoard.slug,
          id: startColumn._id,
          position: destination.index,
        }));
      } else {
        // Mută cardurile între coloane
        const startCards = cardToDisplay.filter((card) => card.columnId === startColumn._id);
        const endCards = cardToDisplay.filter((card) => card.columnId === endColumn._id);
  
        const [movedCard] = startCards.splice(source.index, 1);
        movedCard.columnId = endColumn._id;
        endCards.splice(destination.index, 0, movedCard);
  
       // dispatch(editCard(startColumn._id, endColumn._id, movedCard));
  
        // Apel backend pentru mutarea cardului între coloane
        await dispatch(editColumn({
          boardName: currentBoard.slug,
          id: movedCard._id,
          position: destination.index,
          columnId: endColumn._id,
        }));
      }
    }
  };
  
  
  
  
  return (
    <>
      <Header />
      <section
        className={styles.BoardsSection}
        style={{
          backgroundImage: `url(${currentImage})`,
        }}
      >
        <h2>{currentBoard?.name || ""}</h2>
        <FilterComponent />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="all-columns" direction="horizontal" type="column">
            {(provided) => (
              <div
                className={styles.ColumnsSection}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {uniqueColumns.map((column, index) => (
                  <Draggable key={column._id} draggableId={column._id} index={index}>
                    {(provided) => (
                      <div
                        className={styles.Column}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <h2 className={styles.columnName}>
                          {column.name}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              dispatch(deleteColumn({ boardName: currentBoard.slug, id: column._id }));
                            }}
                          > D </button>
                          <button onClick={() => openEditCardModal(column._id)}>E</button>
                        </h2>

                        <Droppable droppableId={column._id} type="card">
                          {(provided) => (
                            <ul
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                              style={{ display: "block", width: "200px" }}
                            >
                              {cardToDisplay
                                .filter((card) => card.columnId === column._id)
                                .map((card, index) => (
                                  <Draggable key={card._id} draggableId={card._id} index={index}>
                                    {(provided) => (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={styles["task-card"]}
                                      >
                                        <h3 className={styles["card-title"]}>{card.title}</h3>
                                        <span className={styles["card-description"]}>{card.description}</span>
                                        <span>{card.priority}</span>
                                        <span>{card.deadline}</span>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            dispatch(deleteCard({ boardName: currentBoard.slug, id: card._id }));
                                          }}
                                        >
                                          D
                                        </button>
                                      </div>
                                    )}
                                  </Draggable>
                                ))}
                              {provided.placeholder}
                            </ul>
                          )}
                        </Droppable>

                        <button onClick={() => handleOpenCardModal(column._id)}>Add Card</button>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

        <button
          className={styles.AddColumBtn}
          onClick={() => dispatch(openModal("columnModal"))}
        >
          <span>+</span>
          Add another column
        </button>
        {componentName === "columnModal" && (
          <ModalAddColumn onClose={() => dispatch(closeModal())} />
        )}
        {componentName === "cardModal" && (
          <ModalAddCard
            onClose={() => dispatch(closeModal())}
            columnId={selectedColumnId}
          />
        )}
        {componentName === "editColumn" && (
          <ModalEditColumn
            onClose={() => dispatch(closeModal())}
            columnId={selectedColumnId}
             
          />
        )}
      </section>
    </>
  );
};

export default CurrentBoardPage;
