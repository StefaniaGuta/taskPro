import Header from "../../components/Header/Header"; 
import FilterComponent from "components/FilterComponent/FilterComponent";
import { openModal, closeModal } from "../../redux/modal/modalSlice";
import ModalAddColumn from "components/PopUp/ModalAddColumn/ModalAddColumn";
import ModalAddCard from '../../components/PopUp/AddCard/AddCard';
import {  useSelector, } from "react-redux";
import styles from './CurrentBoardPage.module.css';
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

const CurrentBoardPage = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal);
  const { componentName } = modalState;
  const currentBoard = useSelector((state) => state.boards.boards.current || { name: "Default", backgroundImage: "" });
  const allBoards = useSelector((state) => state.boards.boards.dashboards);
 // const aSpecificBoard = allBoards.find(board => board._id === currentBoard._id);
  console.log( allBoards, currentBoard);

  const columns = useSelector((state) => state.boards.boards.current.columns);

  const [selectedColumnId, setSelectedColumnId] = useState(null);
  

  const handleOpenCardModal = (columnId) => {
    setSelectedColumnId(columnId);
    dispatch(openModal("cardModal"));
  };

  useEffect(() => {
    
  }, [columns]);

  return (
    <>
      <Header />
      <section
        className={styles.BoardsSection}
        style={{
          backgroundImage: `url(${currentBoard?.backgroundImage || ""})`,
        }}
      >
        <h2>{currentBoard?.name || ""}</h2>
        <FilterComponent />
        <div className={styles.ColumnsSection}>
          {columns.length > 0 ? (
            <ul>
              {columns.map((column) => (
                <div className={styles.Column} key={column._id}>
                  <h2 className={styles.columnName}> {column.name}</h2>
                  {column.cards.length > 0 ? (
                    <ul style={{ display: "block" }}>
                      {column.cards.map((card) => (
                        <div style={{ display: "block" }} key={card._id}>
                          <h3>{card.title}</h3>
                          <span>{card.description}</span>
                          <span>{card.priority}</span>
                          <span>{card.deadline}</span>
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
