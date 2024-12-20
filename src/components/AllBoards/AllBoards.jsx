import { getAllBoards, deleteBoard, getBoardById } from '../../redux/board/boardOperations';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from "notiflix";
import SideBin from '../../images/SideBin.png';
import SidePencil from '../../images/SidePencil.png';
import styles from './AllBoards.module.css'
import { useNavigate } from 'react-router-dom';

const AllBoards = () => {
  const theme = useSelector((state) => state.auth.user.theme);
    const [boards, setBoards] = useState([]);
    const [selectedBoard, setSelectedBoard] = useState(null);  
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
  useEffect(() => {
    const showAllBoards = async () => {
        try {
          const response = await dispatch(getAllBoards()).unwrap(); 
          setBoards(response.dashboards); 
          console.log('render')
        } catch (error) {
          console.error('Eroare la preluarea boardurilor:', error);
        }
    };
    showAllBoards();
    }, [dispatch]);

    const getSpecificBoard = async (board) => {
      try {
        const boardName = board.slug
        const response = await dispatch(getBoardById(boardName))
        setSelectedBoard(response.payload)
        navigate('/current')
        return response.payload
      } catch (e) {
        console.log(e)
      }
    }

    const deleteSpecificBoard = async () => {
      try {
        const boardName = selectedBoard.slug;
        await dispatch(deleteBoard(boardName)).unwrap();
        setBoards((prevBoards) => prevBoards.filter((board) => board.name !== boardName));
        Notiflix.Notify.success('Board deleted successfully!');
      } catch (e) {
        console.log(e)
      }
    }

      return (
        <div className={styles.NewBoard}>
            {boards.length > 0 ? (
          <ul className={styles.BoardsList}>
            {boards.map((board) => (
              <li 
                className={styles.Board}
                key={board._id} 
                onClick={(e) => {
                  e.stopPropagation();
                  getSpecificBoard(board);
                }}
              >
                <svg className={`${styles.Icon} ${styles[theme]}`} width="18" height="18">
                  <use xlinkHref={board.icon} />
                </svg>
                <h2 className={styles.ProjectName}>{board.name}</h2>

                <div className={styles.icons}>
                  <img
                    src={SidePencil}
                    alt='icon'
                    
                  />
                  <img onClick={(e) => {
                    e.stopPropagation();
                    deleteSpecificBoard(board);
                  }}
                  src={SideBin} 
                  alt='icon' 
                  />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p></p>
        )}
        </div>
      )
}

export default AllBoards;