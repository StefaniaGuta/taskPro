import React, { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header/Header";
import FilterComponent from "components/FilterComponent/FilterComponent";
import ModalAddColumn from "components/PopUp/ModalAddColumn/ModalAddColumn";
import ModalEditColumn from "components/PopUp/ModalEditColumn/ModalEditColumn";
import ModalAddCard from '../../components/PopUp/AddCard/AddCard';
import ModalEditCard from "components/PopUp/EditCard/EditCard";
import MoveButton from "components/PopUp/MoveTask/MoveTask";
import images from '../../images/BgImages/images';
import { openModal, closeModal } from "../../redux/modal/modalSlice";
import { deleteColumn } from "../../redux/columns/columnsOperations";
import { deleteCard } from "../../redux/cards/cardsOpeartions";
import { updateLocalColumn } from "../../redux/columns/columnSlice";
import styles from "./NewBoard.module.css";
import { formatDeadline } from '../../services/formatingDate';
import url from '../../components/PopUp/icons.svg'

const NewBoard = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.auth.user.theme);
  const backgroundImage = useSelector((state) => state.boards.boards.backgroundImage);
  const board = useSelector((state) => state.boards.boards);
  const name = useSelector((state) => state.boards.boards.name);
  const slug = useSelector((state) => state.boards.boards.slug);
  const modalState = useSelector((state) => state.modal);
  const allColumns = useSelector((state) => state.columns.columns);
  const [filter, setFilter] = useState();
  const [currentImage, setCurrentImage] = useState(backgroundImage);
  const [selectedColumnId, setSelectedColumnId] = useState(null);
  const [cardId, setCardId] = useState();
  const { componentName } = modalState;
  const location = useLocation();
  const { state } = location;
  const boardName = state?.name || slug;
  const columns = allColumns.filter((column) => column.boardName === boardName);

  const cardsAdded = useSelector((state) => state.cards.cards || []);
  const filteredCards = cardsAdded.filter((card) => columns.some((col) => col._id === card.columnId));

  const displaynonfilteredCards = () => {
    if (filter) {
      const filteredCardsMaped = filteredCards.filter((card) => card.priority === filter.payload);
      if (filter.payload === "all") {
        return filteredCards
      } else {
        return filteredCardsMaped;
      }
    } else {
        return filteredCards;
    }
  }

  const handleOpenCardModal = (columnId) => {
    setSelectedColumnId(columnId);
    dispatch(openModal("cardModal"));
  };
  
  const openEditColumnModal = (columnId) => {
    setSelectedColumnId(columnId);
    dispatch(openModal("editColumn"))
  }
  const openEditCardModal = (card) => {
    setCardId(card)
    dispatch(openModal("editCardModal"))          
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
const updateColumnLocally = (columnId, updatedName) => {
    dispatch(updateLocalColumn({ id: columnId, name: updatedName }));
  };
  
  return (
    <>
      <Header />
      <section
        className={`${styles.BoardsSection} ${styles[theme]}`}
        style={{
          backgroundImage: `url(${currentImage})`,
        }}
      >
        <div className={styles.NameFilter}>
          <h1>{boardName || name}</h1>
          <FilterComponent setFilter={setFilter}/>
        </div>
        
        <ul className={styles.ColumnsSection}>
          {columns.length > 0 ? (
            <div className={`${styles.ulButton}`}>
            <ul>
              {columns.map((column) => (
                <li className={`${styles.Column} ${styles[theme]}`} key={column._id}>
                  <h2 className={styles.columnName}> 
                    {column.name}
                    <div style={{width: '40px', display: 'flex', justifyContent: 'space-between'}}>
                      <svg width="16" height="16" onClick={() => openEditColumnModal(column._id)}>
                        <use xlinkHref={`${url}#pencil`} />
                      </svg>

                      <svg width="16" height="16"onClick={(e) => {
                        e.stopPropagation();
                        dispatch(deleteColumn({boardName: boardName, id: column._id}))
                      }}>
                        <use xlinkHref={`${url}#bin`} />
                      </svg>
                    </div>  
                  </h2>
                  {filteredCards.length > 0 ? (
                    <ul className={`${styles.Cards} ${styles[theme]}`}>
                      {displaynonfilteredCards()
                      .filter((card) => card.columnId === column._id)
                      .map((card) => (
                        <li key={card._id} className={`${styles["task-card"]} ${styles[`card-${card.priority}`]}`}>
                          <h2 className={styles['card-title']}>{card.title}</h2>
                          <span className={styles['card-description']}>{card.description}</span>
                          

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
                              <MoveButton boardName={board} columnId={column} cardId={card} allColumns={columns}/>
                              <svg width="16" height="16" onClick={() => openEditCardModal(card)}>
                                <use xlinkHref={`${url}#pencil`} />
                              </svg>
                              <svg width="16" height="16"
                                onClick={(e) => {
                                  e.stopPropagation();
                                dispatch(deleteCard({boardName: boardName, id: card._id}))
                                }}
                              >
                                <use xlinkHref={`${url}#bin`} />
                              </svg>
                            </div>
                          </div>  
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p></p>
                  )}
                  <button className={styles.AddCardBtn} onClick={() => handleOpenCardModal(column._id)}>
                    <svg width="28" height="28">
                      <use xlinkHref={theme !== "violet" ?`${url}#buttons-plus` : `${url}#buttons-plus-violet`} />
                    </svg>
                    Add another card
                  </button>
                </li>
                
              ))}
            </ul>
            <button
              className={styles.AddColumBtn}
              onClick={() => dispatch(openModal("columnModal"))}
            >
              <svg width="28" height="28">
                <use xlinkHref={theme !== "dark" ?`${url}#buttons-plus` : `${url}#buttons-plus-violet`} />
              </svg>
              Add another column
            </button>
            </div>
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
          />
        )}
      </section>
    </>
  );
};

export default NewBoard;

