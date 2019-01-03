/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import ListItemColors from './ListItemColors.jsx';

class SimilarListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColor: 0,
    };
    this.handleSwatchHover = this.handleSwatchHover.bind(this);
  }

  handleSwatchHover(newId) {
    this.setState({
      activeColor: newId,
    });
  }

  render() {
    return (
      <div className="SimilarListItem">

        {/* {console.log('props similar item', this.props)} */}
        {/* <TransitionGroup transitionName="allColors" transitionEnterTimeout={700} transitionLeaveTimeout={700}> */}
        {/* <img src={this.props.item[0].colors[0].photos[1].photo_url} alt="" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} /> */}

        <div className="SimilarImageContainer">
          <div className="SimilarImageWrapper">
            <img className="SimilarImage" src={this.props.item[0].colors[this.state.activeColor].photos[0].photo_url} alt="" />
            <img className="SimilarHoverImage" src={this.props.item[0].colors[this.state.activeColor].photos[1].photo_url} alt="" />
          </div>
          <div className="ColorSwatchesContainer">
            {/* <a className="arrow-left arrow"><img className="ArrowPic" src="https://s3-us-west-1.amazonaws.com/lubucket3003/leftarrow.png" alt="" /></a>
            <a className="arrow-right arrow"><img className="RightArrowPic" src="https://s3-us-west-1.amazonaws.com/lubucket3003/leftarrow.png" alt="" /></a> */}
            <ListItemColors colors={this.props.item[0].colors.slice(0, 4)} key={this.props.item[0].colors.id} changeColor={this.handleSwatchHover} />
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
