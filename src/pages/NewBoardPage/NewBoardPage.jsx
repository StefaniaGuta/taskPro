import Header from "../../components/Header/Header"; 
import FilterComponent from "components/FilterComponent/FilterComponent";
import React, { useState } from 'react';
import ModalAddColumn from "components/PopUp/ModalAddColumn/ModalAddColumn";
import { useDispatch } from "react-redux";
import { getAllBoards, deleteBoard } from '../../redux/board/boardOperations';
import styles from './NewBoardPage.module.css';
import { addColumn } from '../../redux/columns/columnsOperations'; 
import { useParams } from "react-router-dom";
import {getBoardById } from '../../redux/board/boardOperations';
import Notiflix from "notiflix";


const NewBoardPage = () => {
  const dispatch = useDispatch();
  const board = useParams();
  
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

  const OpenColumnModal = () => {
    setIsAddColumnModalOpen(true);
    
  }

 // const handleBoardSelect = (board) => {
 //   try {
  //    setSelectedBoard(board); 
      //const boardName = board.slug
      //dispatch(deleteBoard(boardName))
 //   } catch(e) {
  //    console.log(e)
 //   }
 // };

  const getSpecificBoard = async (board) => {
    try {
      const boardName = board.slug
      const response = await dispatch(getBoardById(boardName))
      setSelectedBoard(response.payload)
      return response.payload
    } catch (e) {
      console.log(e)
    }
  }


  const deleteSpecificBoard = async () => {
    try {
      const boardName = selectedBoard.slug;
      await dispatch(deleteBoard(boardName));
      Notiflix.Notify.success('Board deleted successfully!');
    } catch (e) {
      console.log(e)
    }
  }

  const handleAddColumn = async (columnName) => {
    if (!selectedBoard) {
      console.error('Te rog să selectezi un tablou înainte de a adăuga o coloană.');
      return;
    }
  
    const boardSelectedName = selectedBoard.name;
  
    if (boardSelectedName) {
      try {
        const newColumn = await dispatch(addColumn({ 
          boardName: boardSelectedName,  
          name: columnName            
        })).unwrap();
  
        setSelectedBoard(prevBoard => ({
          ...prevBoard,
          columns: [...prevBoard.columns, newColumn]
        }));
  
        setIsAddColumnModalOpen(false);  
      } catch (error) {
        console.error('Eroare la adăugarea coloanei:', error);
      }
    }
  };

  return (
    <>
      <Header />
      <section className={styles.BoardsSection}>
        <h2>Name:{board.boardId}</h2>
        <FilterComponent />
        
        <button 
          className={styles.AddColumBtn} 
          onClick={() => OpenColumnModal}
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
                onClick={() => getSpecificBoard(board)}
                style={{ cursor: 'pointer', margin: '10px 0' }}
              >
                {board.name}
                <button onClick={() => deleteSpecificBoard(board)}>Delete</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No boards available.</p>
        )}

        {selectedBoard && (
          <>
            <h3>Columns for : {selectedBoard.name}</h3>
            {selectedBoard.columns && selectedBoard.columns.length > 0 ? (
              <>
              <ul>
                {selectedBoard.columns.map(column => (
                  <li key={column._id}>{column.name}</li>
                ))}
                
              </ul>
              {selectedBoard.columns.cards && selectedBoard.columns.cards.length > 0 ? (

                <h3>Cards: {selectedBoard.columns[0].cards[0].title}</h3>
              ) : (
              <button>Add Card</button>
              )}
            </>
            ) : (
              <p>No columns available for this board.</p>
            )}
          </>
        )}
      </section>
    </>
  );
};

export default NewBoardPage;