/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import ListItemColors from './ListItemColors.jsx';

class SimilarListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // item: 'useless',
      isHovering: false,
    };
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.toggleHoverState = this.toggleHoverState.bind(this);
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return { isHovering: !state.isHovering };
  }


  // ideas::
  // have the colors be a state item, change the state per child item
  // so therefore need a change state method based on color
  // change rendered image based on onhover

  // stateful component? Let's have a method that changes the rendered picture

  render() {
    return (
      <div className="SimilarListItem">

        {/* {console.log('props similar item', this.props)} */}
        {/* <TransitionGroup transitionName="allColors" transitionEnterTimeout={700} transitionLeaveTimeout={700}> */}
        {/* <img src={this.props.item[0].colors[0].photos[1].photo_url} alt="" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} /> */}

        <div className="SimilarImageContainer">
          <div className="SimilarImageWrapper">
            <img className="SimilarImage" src={this.props.item[0].colors[0].photos[0].photo_url} alt="" />
            <img className="SimilarHoverImage" src={this.props.item[0].colors[0].photos[1].photo_url} alt="" />
          </div>
          <div className="ColorSwatchesContainer">
            {/* <a className="arrow-left arrow"><img className="ArrowPic" src="https://s3-us-west-1.amazonaws.com/lubucket3003/leftarrow.png" alt="" /></a>
            <a className="arrow-right arrow"><img className="RightArrowPic" src="https://s3-us-west-1.amazonaws.com/lubucket3003/leftarrow.png" alt="" /></a> */}
            <ListItemColors colors={this.props.item[0].colors.slice(0, 4)} key={this.props.item[0].colors.id} />
          </div>
        </div>
        {
        // this.state.isHovering && <ListItemColors colors={this.props.item[0].colors}
        // key={this.props.item[0].colors.id} />
        }
        <div id="similarItemName">{this.props.item[0].name}</div>
        <span id="similarItemPrice">{this.props.item[0].price}</span>
        <span id="similarItemCurrency"> USD</span>
      </div>
    );
  }
}

export default SimilarListItem;
