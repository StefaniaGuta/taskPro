import Header from "../../components/Header/Header"; 
import FilterComponent from "components/FilterComponent/FilterComponent";
import { openModal, closeModal } from "../../redux/modal/modalSlice";
import ModalAddColumn from "components/PopUp/ModalAddColumn/ModalAddColumn";
import ModalAddCard from '../../components/PopUp/AddCard/AddCard';
import {  useSelector, } from "react-redux";
import styles from './CurrentBoardPage.module.css';
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import images from '../../images/BgImages/images';
import { deleteCard } from "../../redux/cards/cardsOpeartions";
import { deleteColumn } from "../../redux/columns/columnsOperations";

const CurrentBoardPage = () => {
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
        <div className={styles.ColumnsSection}>
          {uniqueColumns.length > 0 ? (
            <ul>
              {uniqueColumns.map((column) => (
                <div className={styles.Column} key={column._id}>
                  <h2 className={styles.columnName}> 
                    {column.name}
                    <button onClick={(e) => {
                          e.stopPropagation();
                          dispatch(deleteColumn({boardName: currentBoard.slug, id: column._id}))
                        }}>D</button>
                    </h2>
                  
                  <ul style={{ display: "block", width: "200px"}}>
                    {cardToDisplay.filter((card) => card.columnId === column._id).map((card) => (
                      <div key={card._id} className={styles['task-card']}>
                        <h3 className={styles['card-title']}>{card.title}</h3>
                        <span className={styles['card-description']}>{card.description}</span>
                        <span>{card.priority}</span>
                        <span>{card.deadline}</span>
                        <button onClick={(e) => {
                          e.stopPropagation();
                          dispatch(deleteCard({boardName: currentBoard.slug, id: card._id}))
                        }}>D</button>
                      </div>
                    ))}
                  </ul>
                  
                  <button onClick={() => handleOpenCardModal(column._id)}>
                    Add Card
                  </button>
                </div>
              ))}
            </ul>
          ) : (
            <p>NO</p>
          )}
        </div>
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
      </section>
    </>
  );
};

export default CurrentBoardPage;
