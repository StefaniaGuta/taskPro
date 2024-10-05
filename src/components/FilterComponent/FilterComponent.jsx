import filter from '../../images/filter.png';
import style from './FilterComponent.module.css'
import Filters from '../PopUp/Filters/Filters';
import { useSelector } from 'react-redux';

import { useState } from 'react';

const FilterComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const theme = useSelector(state => state.auth.user.theme);
    return (
        <>
        <button className={`${style.FilterBtn} ${style[theme]}`} onClick={() => setIsOpen(true)}>
            <img src={filter} alt='filter'/>
            Filters
        </button>
        {isOpen && <Filters onClose={() => setIsOpen(false)}/>}
        </>
    )
}
export default FilterComponent;
