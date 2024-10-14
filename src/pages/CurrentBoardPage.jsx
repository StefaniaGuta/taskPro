import Header from "../components/Header/Header"; 
import FilterComponent from "../components/FilterComponent/FilterComponent";
import React, { useState } from 'react';
import ModalAddColumn from "../components/PopUp/ModalAddColumn/ModalAddColumn";
import { useDispatch } from "react-redux";
import { getAllBoards } from '../redux/board/boardOperations';
import styles from './NewBoardPage/NewBoardPage.module.css';
import { useParams } from "react-router-dom";
import { addColumn } from '../redux/columns/columnsOperations';  



const CurrentBoard = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams(); 
  
  const [isAddColumnModalOpen, setIsAddColumnModalOpen] = useState(false);
  const [boards, setBoards] = useState([]); 
  const [selectedBoard, setSelectedBoard] = useState(null); 
 
  const showAllBoards = async () => {
    try {
      const response = await dispatch(getAllBoards()).unwrap(); 
      const dashboards = response.dashboards;
      const top10Boards = dashboards.slice(0, 10);
      setBoards(top10Boards); 
    } catch (error) {
      console.error('Eroare la preluarea boardurilor:', error);
    }
  };


  const handleBoardSelect = (board) => {
    setSelectedBoard(board); 
  };


  const handleAddColumn = async (columnName) => {
    if (selectedBoard) {
      try {
        const newColumn = await dispatch(addColumn({ 
          boardId: selectedBoard._id, 
          name: columnName 
        })).unwrap();

        setSelectedBoard(prevBoard => ({
          ...prevBoard,
          columns: [...prevBoard.columns, newColumn]
        }));

        setIsAddColumnModalOpen(false); 
      } catch (error) {
        console.error("Eroare la adăugarea coloanei:", error);
      }
    }
  };

  return (
    <>
      <Header />
      <section className={styles.BoardsSection}>
        <h2>Board ID: {boardId}</h2>
        <FilterComponent />
        
        <button 
          className={styles.AddColumBtn} 
          onClick={() => setIsAddColumnModalOpen(true)}
        >
          <span>+</span>
          Add another column
        </button>
        
        {isAddColumnModalOpen && (
          <ModalAddColumn 
            onClose={() => setIsAddColumnModalOpen(false)}
            onSubmit={handleAddColumn}
          />
        )}

        <button onClick={showAllBoards}>
          Show Boards
        </button>

        {boards.length > 0 ? (
          <ul>
            {boards.map((board) => (
              <li 
                key={board._id} 
                onClick={() => handleBoardSelect(board)}
                style={{ cursor: 'pointer', margin: '10px 0' }}
              >
                {board.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No boards available.</p>
        )}

        {selectedBoard && (
          <>
            <h3>Columns for {selectedBoard.name}:</h3>
            {selectedBoard.columns && selectedBoard.columns.length > 0 ? (
              <ul>
                {selectedBoard.columns.map(column => (
                  <li key={column}>{column}</li>  
                ))}
              </ul>
            ) : (
              <p>No columns available for this board.</p>
            )}
          </>
        )}
      </section>
    </>
  );
}

export default CurrentBoard;
