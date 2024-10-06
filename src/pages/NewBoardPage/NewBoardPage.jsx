import Header from "../../components/Header/Header";
import FilterComponent from "components/FilterComponent/FilterComponent";
import React from 'react';
import { useSelector } from 'react-redux';
import ModalAddColumn from "components/PopUp/ModalAddColumn/ModalAddColumn";
import { useState } from "react";
import { useParams } from "react-router-dom";

import styles from './NewBoardPage.module.css'

const NewBoardPage = () => {
  const board = useParams();
  console.log('hei')
  console.log(board)

  console.log(useSelector((state) => state.boards));
  const [isAddColumnModalOpen, setIsAddColumnModalOpen] = useState(false);
  
    return (
        <>
        <Header/>
        <section className={styles.BoardsSection}>
          <h2>
            Name {board.boardName}
          </h2>
        <FilterComponent/>
        <button className={styles.AddColumBtn} onClick={() => setIsAddColumnModalOpen(true)}>
              <span>+</span>
              Add another column
            </button>
            {isAddColumnModalOpen && <ModalAddColumn onClose={() => setIsAddColumnModalOpen(false)} />}   
        </section>
        </>
    );
}

export default NewBoardPage;