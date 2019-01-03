/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ListItemColors = (props) => {
  return (
    <span className="colors">
      {/* {console.log('props in colors', props.colors)} */}
      {/* <TransitionGroup transitionName="allColors" transitionEnterTimeout={700}
        transitionLeaveTimeout={700}>
        <CSSTransition key={props.colors.id} timeout={500} classNames="fade"> */}
      {props.colors.map((item, i) => {
        return (
          <span className="oneSwatch">
            <img id="swatchImage" src={item.swatch_url} alt="" onMouseEnter={() => { props.changeColor(i); }} />
          </span>
        );
      })}

    </span>

  //   <div className="swatch" style="float:left;height:134px;width:150px">
  //     <img src="http://i2.ytimg.com/vi/yKWoPlL2B8I/mqdefault.jpg" width="150" />
  //   </div>
  //   <div className="swatch" style="float:left;height:134px;width:150px">
  //     <img src="http://i2.ytimg.com/vi/yKWoPlL2B8I/mqdefault.jpg" width="150" />
  //   </div>
  //   <div className="swatch" style="float:left;height:134px;width:150px">
  //     <img src="http://i2.ytimg.com/vi/yKWoPlL2B8I/mqdefault.jpg" width="150" />
  //   </div>
  // </div>
  );
};

export default ListItemColors;
