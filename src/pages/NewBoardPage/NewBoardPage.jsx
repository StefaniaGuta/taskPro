import Header from "../../components/Header/Header";
import FilterComponent from "components/FilterComponent/FilterComponent";
import React from 'react';
import ModalAddColumn from "components/PopUp/ModalAddColumn/ModalAddColumn";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAllBoards} from '../../redux/board/boardOperations'

import styles from './NewBoardPage.module.css'

const NewBoardPage = () => {
  const board = useParams();
  const dispatch = useDispatch();

  const [isAddColumnModalOpen, setIsAddColumnModalOpen] = useState(false);
  
  const showAllBoards = () => {
    const allBoards = dispatch(getAllBoards());
    console.log(allBoards);
    
  }
  
    return (
        <>
        <Header/>
        <section className={styles.BoardsSection}>
          <h2>
            Name {board.boardId}
          </h2>
        <FilterComponent/>
        <button className={styles.AddColumBtn} onClick={() => setIsAddColumnModalOpen(true)}>
              <span>+</span>
              Add another column
            </button>
            {isAddColumnModalOpen && <ModalAddColumn onClose={() => setIsAddColumnModalOpen(false)} />}   
        <button onClick={showAllBoards}>
          Show Boards
        </button>
        </section>
        </>
    );
}

export default NewBoardPage;