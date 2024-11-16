import url from '../../../images/icons/sprite.svg';

import s from './ModalBoardIcons.module.css'

const ModalBoardIcons = ({ field, form }) => {
  const { name, value } = field;

  const onOptionChange = e => {
    const iconId = e.target.value;
    const iconUrl = `${url}#icon-board-${iconId}`;
    form.setFieldValue(name, iconUrl);
  };

  return (
    <div className={s.IconContainer}>
      {Array.from({ length: 8 }, (_, i) => {
        const iconValue = (i + 1).toString();
        return (
          <label key={iconValue}>
            <input
              type="radio"
              name={name}
              value={iconValue}
              checked={value === iconValue}
              onChange={onOptionChange}
            />
            <svg className={s.Icon} width="18" height="18">
              <use xlinkHref={`${url}#icon-board-${iconValue}`} />
            </svg>
          </label>
        );
      })}
    </div>
  );
};

export default ModalBoardIcons;
