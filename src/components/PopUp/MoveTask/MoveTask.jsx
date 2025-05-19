import url from '../../PopUp/icons.svg';
import { useState } from 'react';
import styles from './MoveTask.module.css';
import { moveCard } from '../../../redux/cards/cardsOpeartions';
import { useDispatch, useSelector } from 'react-redux';

const MoveButton = ({columnId, cardId, allColumns, boardName, triggerRefresh}) => {
  const theme = useSelector(state => state.auth.user.theme);
  const [open, setOpen] = useState(null);
  const dispatch = useDispatch();
  
  const handleClick =() => {
    setOpen(!open);
  }
  
  const choseCol = async (targetCol) => {
    try{
      const response = await dispatch(
        moveCard({
          boardName: boardName,
          cardId: cardId._id,
          newColId: targetCol
        })
      );
    
      if (response.meta.requestStatus === 'fulfilled') {
        await triggerRefresh();
        setOpen(false);
      }
    }catch(e){
      console.log(e)
    }
  };

  return (
    <section className={`${styles.MoveMenu} ${styles[theme]}`}>
      <svg onClick={handleClick} width="16" height="16">
        <use xlinkHref={`${url}#move-card`} />
      </svg>
      {open && (
        <ul className={`${styles.Menu} ${styles[theme]}`}>
          {allColumns.map((col) =>
            col._id !== columnId._id ? (
              <h2 key={col._id} onClick={() => choseCol(col)}>
                {col.name}
                <svg width="16" height="16">
                  <use xlinkHref={`${url}#move-card`} />
                </svg>
              </h2>
            ) : null
          )}
        </ul>
      )}
    </section>
  );
};
export default MoveButton;