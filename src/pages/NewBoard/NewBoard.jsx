import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../../redux/modal/modalSlice";
import Header from "../../components/Header/Header";
import FilterComponent from "components/FilterComponent/FilterComponent";
import ModalAddColumn from "components/PopUp/ModalAddColumn/ModalAddColumn";
import { useLocation } from "react-router-dom";
import styles from "./NewBoard.module.css";
import images from '../../images/BgImages/images'


const NewBoard = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.auth.user.theme);
  const backgroundImage = useSelector((state) => state.boards.boards.backgroundImage);
  const modalState = useSelector((state) => state.modal);
  const { componentName } = modalState;
  const location = useLocation();
  const { state } = location;
  const boardName = state?.name;
  const boardIcon = state?.icon;
  const [currentImage, setCurrentImage] = useState(backgroundImage);

  
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

        {componentName === "newBoard" && (
          <ModalAddColumn onClose={() => dispatch(closeModal())} />
        )}
      </section>
    </>
  );
};

export default NewBoard;

