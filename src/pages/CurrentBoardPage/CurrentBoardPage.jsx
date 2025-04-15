import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FilterComponent from "components/FilterComponent/FilterComponent";
import ModalAddColumn from "components/PopUp/ModalAddColumn/ModalAddColumn";
import ModalEditColumn from "components/PopUp/ModalEditColumn/ModalEditColumn";
import ModalAddCard from '../../components/PopUp/AddCard/AddCard';
import ModalEditCard from "../../components/PopUp/EditCard/EditCard";
import Header from "../../components/Header/Header"; 
import { openModal, closeModal } from "../../redux/modal/modalSlice";
import { deleteColumn} from "../../redux/columns/columnsOperations";
import { getBoardById } from "../../redux/board/boardOperations";
import { deleteCard } from "../../redux/cards/cardsOpeartions";
import { updateLocalColumn } from '../../redux/columns/columnSlice';
import styles from './CurrentBoardPage.module.css';
import images from '../../images/BgImages/images';
import { formatDeadline } from '../../services/formatingDate';
import MoveButton from "components/PopUp/MoveTask/MoveTask";

import url from '../../components/PopUp/icons.svg';


const CurrentBoardPage = () => {
  const location = useLocation();
  const {state} = location;
  const theme = useSelector(state => state.auth.user.theme);
  const [showColumnsMap, setShowColumnsMap] = useState([]);
  const [cardId, setCardId] = useState();
  const [filter, setFilter] = useState();
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal);
  const { componentName } = modalState;
  const currentBoard = state.transferedBoard;
  const editedBoard = state.updates;
  const backgroundImage = currentBoard.backgroundImage;
  const currentBoardName = currentBoard.name;
  const currentBoardSlug= currentBoard.slug;

  const changeName = () => {
    if (currentBoardName !== editedBoard?.name) {
      return editedBoard?.name
    } else {
      return currentBoardName;
    }
  }

  const changeBackgroundImage = () => {
    if (backgroundImage !== editedBoard?.backgroundImage) {
      return editedBoard?.backgroundImage
    } else {
      return backgroundImage;
    }
  }
  
  //columns 
  const backendColumns = showColumnsMap;
  const addedColumns = useSelector((state) => state.columns.columns);
  const filteredColumns = addedColumns.filter((column) => column.boardName === currentBoardSlug);
  const columns = backendColumns.concat(filteredColumns);
  const uniqueColumns = Array.from(new Set(columns.map(column => column._id)))
  .map(id => columns.find(column => column._id === id));
  
  //cards
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

  useEffect(() => {
    const showColumns = async () => {
      try {
        const response = await dispatch(getBoardById(currentBoard.slug));
        setShowColumnsMap(response.payload.columns);
        return response.payload
      } catch (error) {
        console.error("Error fetching columns:", error);
      }
    };
  
    if (currentBoard.slug) {
      showColumns();
    }
  }, [dispatch, currentBoard.slug,]);
  const openEditColumnModal = (columnId) => {
    setSelectedColumnId(columnId);
    dispatch(openModal("editColumn"))
  }

  const openEditCardModal = (card) => {
    setCardId(card)
    dispatch(openModal("editCardModal"))          
  }

  const updateColumnLocally = (columnId, updatedName) => {
    setShowColumnsMap(prevColumns =>
      prevColumns.map(column =>
        column._id === columnId ? { ...column, name: updatedName } : column
      )
    );
    dispatch(updateLocalColumn({ id: columnId, name: updatedName }));
  };

  const updateCardLocally = (updatedCard) => {
    setShowColumnsMap(prevColumns =>
      prevColumns.map(column => ({
        ...column,
        cards: column.cards.map(card =>
          card._id === updatedCard._id ? { ...card, ...updatedCard } : card
        )
      }))
    );
  };

  const deleteBackendColumn = async (column) => {
      await dispatch(deleteColumn({ boardName: currentBoard.slug, id: column._id }));
      setShowColumnsMap((prevColumns) => prevColumns.filter((col) => col._id !== column._id));
  }

  const deleteBackendCards = async (card) => {
    await dispatch(deleteCard({ boardName: currentBoard.slug, id: card._id }));
    setShowColumnsMap(prevColumns =>
      prevColumns.map(column => ({
        ...column,
        cards: column.cards.filter(c => c._id !== card._id)
      })))
  }
  
  const displaynonfilteredCards = () => {
    if (filter) {
      const filteredCardsMaped = cardToDisplay.filter((card) => card.priority === filter.payload);
      if (filter.payload === "all") {
        return cardToDisplay
      } else {
        return filteredCardsMaped;
      }
    } else {
        return cardToDisplay;
    }
  }

  const refreshBoard = async () => {
    try {
      const response = await dispatch(getBoardById(currentBoard.slug));
      setShowColumnsMap(response.payload.columns);
    } catch (error) {
      console.error("Error refreshing board:", error);
    }
  };
  
  return (
    <>
      <Header />
      <section
        className={`${styles.BoardsSection} ${styles[theme]}`}
        style={{backgroundImage: `url(${changeBackgroundImage() || currentImage})`}}
      >
        <div className={styles.NameFilter}>
          <h1>{changeName() || currentBoardName}</h1>
          <FilterComponent setFilter={setFilter}/>
        </div>

        <ul className={styles.ColumnsSection}>
          {uniqueColumns.length > 0 ? (
            <li className={`${styles.ulButton}`}>
              {uniqueColumns.map((column) => (
                <div key={column._id} className={`${styles.Column} ${styles[theme]}`}>
                  <h2 className={styles.columnName}>
                    {column.name}
                    <div style={{width: '40px', display: 'flex', justifyContent: 'space-between'}}>
                      <svg width="16" height="16" onClick={() => openEditColumnModal(column._id)}>
                        <use xlinkHref={`${url}#pencil`} />
                      </svg>
                      <svg width="16" height="16" onClick={() => deleteBackendColumn(column)}>
                        <use xlinkHref={`${url}#bin`} />
                      </svg>
                    </div>
                  </h2>


                  <ul className={`${styles.Cards} ${styles[theme]}`}>
                    {displaynonfilteredCards()
                    .filter((card) => card.columnId === column._id)
                    .map((card) => (

                    <li key={card._id} className={`${styles["task-card"]} ${styles[`card-${card.priority}`]}`}>
                      <h2 className={styles["card-title"]}>{card.title}</h2>
                      <span className={styles["card-description"]}>{card.description}</span>
                      <div className={`${styles.bottomCard}`}>
                        <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                          <span className={`${styles.Priority}`}>
                            Priority
                            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                            <span className={`${styles.PriorityColor} ${styles[`priority-${card.priority}`]}`}></span>
                            <h4>{card.priority}</h4>
                          </div>
                          </span>

                          <span className={`${styles.Deadline}`}> 
                            Deadline
                            <h4>{formatDeadline(card.deadline)}</h4>
                          </span>
                        </div>

                        <div className={`${styles.Svgs}`}>
                          <svg width="14" height="16" className={`${styles.DeadlineBell} ${styles[`deadlineBell-${card.priority}`]}`}>
                            <use xlinkHref={`${url}#bell`} />
                          </svg>
                          <MoveButton 
                            boardName={currentBoard} 
                            columnId={column} 
                            cardId={card} 
                            allColumns={uniqueColumns}
                            triggerRefresh={refreshBoard}
                          />
                          <svg width="16" height="16" onClick={() => openEditCardModal(card)}>
                            <use xlinkHref={`${url}#pencil`} />
                          </svg>
                          <svg width="16" height="16" onClick={() => deleteBackendCards(card)}>
                            <use xlinkHref={`${url}#bin`} />
                          </svg>
                        </div>
                      </div>
                    </li>
                    ))}
                  </ul>
                  <button className={styles.AddCardBtn} onClick={() => handleOpenCardModal(column._id)}>
                    <svg width="28" height="28">
                      <use xlinkHref={theme !== "violet" ?`${url}#buttons-plus` : `${url}#buttons-plus-violet`} />
                    </svg>
                    Add another card
                  </button>
                </div>
              ))}
            <button
              className={styles.AddColumBtn}
              onClick={() => dispatch(openModal("columnModal"))}
            >
              <svg width="28" height="28">
                <use xlinkHref={theme !== "dark" ?`${url}#buttons-plus` : `${url}#buttons-plus-violet`} />
              </svg>
              Add another column
            </button>
            </li>
            ) : (
            <button
              className={styles.AddColumBtn}
              onClick={() => dispatch(openModal("columnModal"))}
            >
              <svg width="28" height="28">
                <use xlinkHref={theme !== "dark" ?`${url}#buttons-plus` : `${url}#buttons-plus-violet`} />
              </svg>
              Add another column
            </button>
          )}
        </ul>
            
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
            updateColumn={updateColumnLocally}
          />
        )}
        {componentName === "editCardModal" && (
          <ModalEditCard 
            onClose={() => dispatch(closeModal())}
            cardId={cardId}
            updateCard = {updateCardLocally}
          />
        )}
      </section>
    </>
  );
};

export default CurrentBoardPage;