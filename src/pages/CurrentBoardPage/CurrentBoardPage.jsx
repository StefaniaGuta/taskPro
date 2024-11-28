import Header from "../../components/Header/Header"; 
import FilterComponent from "components/FilterComponent/FilterComponent";
import { openModal, closeModal } from "../../redux/modal/modalSlice";
import ModalAddColumn from "components/PopUp/ModalAddColumn/ModalAddColumn";
import {  useSelector, } from "react-redux";
import styles from './CurrentBoardPage.module.css';
import { useDispatch } from "react-redux";

const CurrentBoardPage = () => {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal);
  const { componentName } = modalState;
  const currentBoard = useSelector((state) => state.boards.boards.current || { name: "Default", backgroundImage: "" });
  const columns = useSelector((state) => state.boards.boards.current.columns)
  const c = useSelector((state) => state.boards.boards.current)
  console.log(columns, c)
  
  
  return (
    <>
      <Header />
      <section className={styles.BoardsSection}
       style={{
        backgroundImage: `url(${currentBoard?.backgroundImage || ""})`,
      }}>
        <h2>{currentBoard?.name || ""}</h2>
        <FilterComponent />

        <div className={styles.ColumnsSection}>
            {columns.length > 0 ? (
              <ul>
                {columns.map((column) => (<li key={column._id}> {column.name} </li>))}
              </ul>
              ) : (
              <p>NO</p>
            )}
          
          <button
            className={styles.AddColumBtn}
            onClick={() => dispatch(openModal("columnModal"))}
          >
            <span>+</span>
            Add another column
          </button>
        </div>
        {componentName === "columnModal" && (
          <ModalAddColumn onClose={() => dispatch(closeModal())} />
        )}
      </section>
    </>
  );
};

export default CurrentBoardPage;