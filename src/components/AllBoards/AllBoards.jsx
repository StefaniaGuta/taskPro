import { getAllBoards, deleteBoard, getBoardById } from '../../redux/board/boardOperations';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from "notiflix";
import styles from './AllBoards.module.css'
import { useNavigate } from 'react-router-dom';
import ModalEditBoard from 'components/PopUp/ModalEditBoard/ModalEditBoard';
import { openModal, closeModal } from "../../redux/modal/modalSlice";

import url from '../PopUp/icons.svg'

const AllBoards = () => {
  const theme = useSelector((state) => state.auth.user.theme);
  const [boards, setBoards] = useState([]);
  const [selectedBoard, setSelectedBoard] = useState(null);  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const modalState = useSelector((state) => state.modal);
  const { componentName } = modalState;
    
  useEffect(() => {
    const showAllBoards = async () => {
      try {
        const response = await dispatch(getAllBoards()).unwrap(); 
        setBoards(response.dashboards);
      } catch (error) {
        console.error('Eroare la preluarea boardurilor:', error);
      }
  };
    showAllBoards();
  }, [dispatch]);

   
  const getSpecificBoard = async (board) => {
    try {
      const boardName = board.slug;
      const transferedBoard = board;
      const response = await dispatch(getBoardById(boardName))
      navigate(`/current/${boardName}`, {replace: true, state: { transferedBoard} });
      return response.payload
    } catch (e) {
      console.log(e)
    }
  }

  const deleteSpecificBoard = async (board) => {
    try {
      const boardName = board.slug;
      await dispatch(deleteBoard(boardName)).unwrap();
      setBoards((prevBoards) => prevBoards.filter((board) => board.slug !== boardName));
      Notiflix.Notify.success('Board deleted successfully!');
    } catch (e) {
      console.log(e)
    }
  }
  
  const updateBoardInList = (updatedBoard) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.slug === updatedBoard.slug ? updatedBoard : board
      )
    );
  };
  
  return(
    <>
      {boards.length > 0 ? (
        <ul className={`${styles.BoardsList} ${styles[theme]}`}>
          {boards.map((board) => (
            <li 
              className={styles.Board}
              key={board._id} 
              onClick={(e) => {
                e.stopPropagation();
                getSpecificBoard(board)
              }}
            >
              <div className={styles.NameIcon}>
                <svg className={`${styles.Icon} ${styles[theme]}`} width="18" height="18">
                  <use xlinkHref={board.icon} />
                </svg>
                <h2 className={styles.ProjectName}>
                  {board.name}
                </h2>
              </div>

              <div className={styles.icons}>
                <svg width="16" height="16" onClick={(e) => {
                  e.stopPropagation(); 
                  dispatch(openModal("editBoard")); 
                  setSelectedBoard(board);
                }}>
                  <use xlinkHref={`${url}#pencil`} />
                </svg>

                <svg width="16" height="16"onClick={(e) => {
                  e.stopPropagation();
                  deleteSpecificBoard(board);
                }}>
                  <use xlinkHref={`${url}#bin`} />
                </svg>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
      {componentName === "editBoard" && (
        <ModalEditBoard boardName={selectedBoard} onUpdateBoard={updateBoardInList} onClose={() => dispatch(closeModal())}/>
      )} 
    </>
  )
}

export default AllBoards;