import filter from '../../images/filter.png';
import style from './FilterComponent.module.css'
import Filters from '../PopUp/Filters/Filters';

import { useState } from 'react';

const FilterComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <button className={style.FilterBtn} onClick={() => setIsOpen(true)}>
            <img src={filter} alt='filter'/>
            Filters
        </button>
        {isOpen && <Filters onClose={() => setIsOpen(false)}/>}
        </>
    )
}
export default FilterComponent;
