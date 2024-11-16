import Header from "../../components/Header/Header"; 
import FilterComponent from "components/FilterComponent/FilterComponent";
import ModalAddColumn from "components/PopUp/ModalAddColumn/ModalAddColumn";
import { useDispatch, useSelector } from "react-redux";
import styles from './NewBoard.module.css';
import { openModal, closeModal } from "../../redux/modal/modalSlice";
import { useLocation } from "react-router-dom";


const NewBoard = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.auth.user.theme);
  const backgroundImage = useSelector((state) => state.boards.boards.backgroundImage);

  const modalState = useSelector(state => state.modal);
  const { componentName } = modalState;
  const location = useLocation();
  const { state } = location;
  const boardName = state?.name;
  const boardIcon = state?.icon;

  return (
    <>
      <Header />
      <section
        className={`${styles.BoardsSection} ${styles[theme]}`}
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        }}
      >
        <div className={styles.NameFilter}>
        <h2>
          {boardName}
          <svg className={`${styles.Icon} ${styles[theme]}`} width="18" height="18">
            <use xlinkHref={boardIcon} />
          </svg>
        </h2>
        <FilterComponent />
        </div>

        <button 
          className={styles.AddColumBtn} 
          onClick={() => dispatch(openModal("newBoard"))}
        >
          <span>+</span>
          Add another column
        </button>

        {componentName === "newBoard" && (<ModalAddColumn onClose={() => dispatch(closeModal())} />)}
      </section>
    </>
  );
};

export default NewBoard;
