import React, { useState } from 'react';
import sprite from 'assets/images/icons/icons-sprite.svg';

import { IconsUl, IconSVG, InputRadio } from './BoardModal.styled';

const ICONS_ARRAY = [
    { id: 0, name: 'icon-board-fourCircles-1' },
    { id: 1, name: 'icon-board-star-2' },
    { id: 2, name: 'icon-board-loading-3' },
    { id: 3, name: 'icon-board-puzzle-4' },
    { id: 4, name: 'icon-board-box-5' },
    { id: 5, name: 'icon-board-lightning-6' },
    { id: 6, name: 'icon-board-colors-7' },
    { id: 7, name: 'icon-board-hexagon-8' },
  ];
  
 

export const IconsList = ({ iconId }) => {
  const [selectedIconId, setSelectedIconId] = useState(iconId);

  const handleIconChange = id => {
    setSelectedIconId(id);
  };

  return (
    <IconsUl>
      {ICONS_ARRAY.map(item => {
        return (
          <li key={item.id}>
            <label>
              <InputRadio
                type="radio"
                name="iconId"
                value={selectedIconId}
                defaultChecked={selectedIconId === item.id}
                onChange={() => handleIconChange(item.id)}
              />
              <IconSVG width="18" height="18">
                <use xlinkHref={`${sprite}#${item.name}`} />
              </IconSVG>
            </label>
          </li>
        );
      })}
    </IconsUl>
  );
};