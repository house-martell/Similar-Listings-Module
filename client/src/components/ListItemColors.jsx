/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable arrow-body-style */
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import ColorsBox from '../styles/ColorsBox';

const ListItemColors = (props) => {
  return (
    <div className="colors">
      {/* {console.log('props in colors', props.colors)} */}
      {/* <TransitionGroup transitionName="allColors" transitionEnterTimeout={700} transitionLeaveTimeout={700}>
        <CSSTransition key={props.colors.id} timeout={500} classNames="fade"> */}
      {/* <ColorsBox /> */}
      {props.colors.map((item) => {
        return (
          <div className="swatch" style={{ float: 'left' }}>
            <img src={item.swatch_url} alt="" />
          </div>
        );
      })}
      {/* </CSSTransition>
      </TransitionGroup> */}
    </div>

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
