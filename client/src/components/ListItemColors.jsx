/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import style from '../../dist/styles/ListItemColors.css';

const ListItemColors = (props) => {
  return (
    <span className="colors">
      { props.colors.map((item, i) => {
        return (
          <span className={style.oneSwatch}>
            <img className={style.swatchImage} src={item.swatch_url} alt="" onMouseEnter={() => { props.changeColor(i); }} />
          </span>
        );
      })}
    </span>
  );
};

export default ListItemColors;
