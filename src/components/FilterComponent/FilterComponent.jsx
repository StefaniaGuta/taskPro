import { useSelector } from 'react-redux';
//import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Filters from '../PopUp/Filters/Filters';
import url from '../../components/PopUp/icons.svg';
import style from './FilterComponent.module.css';
import { openModal, closeModal } from "../../redux/modal/modalSlice";

const FilterComponent = ({columns, setFilteredCards}) => {
  const dispatch = useDispatch()
  const modalState = useSelector((state) => state.modal);
  const { componentName } = modalState;
  const theme = useSelector(state => state.auth.user.theme);

  return (
    <>
      <button className={`${style.FilterBtn} ${style[theme]}`} onClick={() => dispatch(openModal("Filters"))}>
        <svg width="16" height="14">
          <use xlinkHref={`${url}#filter`} />
        </svg>
        Filters
      </button>
      {componentName === "Filters" && (<Filters columns={columns} setFilteredCards={setFilteredCards} onClose={() => dispatch(closeModal())} />)}
    </>
  )
}
export default FilterComponent;
