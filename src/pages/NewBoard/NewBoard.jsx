import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../redux/modal/modalSlice";
import Header from "../../components/Header/Header";
import FilterComponent from "components/FilterComponent/FilterComponent";
import ModalAddColumn from "components/PopUp/ModalAddColumn/ModalAddColumn";
import ModalAddCard from '../../components/PopUp/AddCard/AddCard';
import { useLocation } from "react-router-dom";
import styles from "./NewBoard.module.css";
import images from '../../images/BgImages/images';
import { deleteColumn } from "../../redux/columns/columnsOperations";
import { deleteCard } from "../../redux/cards/cardsOpeartions";

const NewBoard = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.auth.user.theme);
  const backgroundImage = useSelector((state) => state.boards.boards.backgroundImage);
  const modalState = useSelector((state) => state.modal);
  const { componentName } = modalState;
  const location = useLocation();
  const { state } = location;
  const boardName = state?.name;
  const [currentImage, setCurrentImage] = useState(backgroundImage);
  const [selectedColumnId, setSelectedColumnId] = useState(null);

  const allColumns = useSelector((state) => state.columns.columns)
  const columns = allColumns.filter((column) => column.boardName === boardName);
  console.log(columns)

  const cardsAdded = useSelector((state) => state.cards.cards || []);
  const filteredCards = cardsAdded.filter((card) => columns.some((col) => col._id === card.columnId));
  console.log(cardsAdded)

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
        className={`${styles.BoardsSection} ${styles[theme]}`}
        style={{
          backgroundImage: `url(${currentImage})`,
        }}
      >
        <div className={styles.NameFilter}>
          <h2>{boardName}</h2>
          <FilterComponent />
        </div>

        <button
          className={styles.AddColumBtn}
          onClick={() => dispatch(openModal("newBoard"))}
        >
          <span>+</span>
          Add another column
        </button>

        {componentName === "newBoard" && (
          <ModalAddColumn onClose={() => dispatch(closeModal())} />
        )}
        <div className={styles.ColumnsSection}>
          {columns.length > 0 ? (
            <ul>
              {columns.map((column) => (
                <div className={styles.Column} key={column._id}>
                  <h2 className={styles.columnName}> 
                    {column.name}
                    <button onClick={(e) => {
                          e.stopPropagation();
                          dispatch(deleteColumn({boardName: boardName, id: column._id}))
                        }}>D</button>
                  </h2>
                  {filteredCards.length > 0 ? (
                    <ul style={{ display: "block", width: "200px"}}>
                      {filteredCards.filter((card) => card.columnId === column._id).map((card) => (
                        <div key={card._id} className={styles['task-card']}>
                          <h3 className={styles['card-title']}>{card.title}</h3>
                          <span className={styles['card-description']}>{card.description}</span>
                          <span>{card.priority}</span>
                          <span>{card.deadline}</span>
                          <button onClick={(e) => {
                          e.stopPropagation();
                          dispatch(deleteCard({boardName: boardName, id: card._id}))
                        }}>D</button>
                        </div>
                      ))}
                    </ul>
                  ) : (
                    <p>No cards</p>
                  )}
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

export default NewBoard;

