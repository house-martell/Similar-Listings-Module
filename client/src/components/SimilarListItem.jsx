/* eslint-disable arrow-body-style */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
//import ListItemColors from './ListItemColors.jsx';

// eslint-disable-next-line arrow-body-style
// const SimilarListItem = (props) => {
//   return (
//     <div className="SimilarListItem">
//       {console.log('props similar item', props)}
//       <img src={props.item.photo_url} alt="new" />
//       <p>Item description</p>
//       <p>$50.00</p>
//     </div>
//   );
// };

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
    return { isHovering: !state.isHovering, };
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

        {/* <ListItemColors colors={this.props.item[0].colors} key={this.props.item[0].colors.id} /> */}
        <img src={this.props.item[0].colors[0].photos[1].photo_url} alt="" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover} />
        {
          this.state.isHovering
          && (
            <div className="colors">
              <CSSTransitionGroup key={this.props.item[0].colors.id} transitionName="allColors" transitionEnterTimeout={700} transitionLeaveTimeout={700}>

                {this.props.item[0].colors.map((item) => {
                  return (
                    <div className="swatch" style={{ float: 'left' }}>
                      <img src={item.swatch_url} alt="" />
                    </div>
                  );
                })}

              </CSSTransitionGroup>
            </div>
          )
        }

        {/* </TransitionGroup> */}
        <br />
        <div />
        <p>{this.props.item[0].name}</p>
        <p>{this.props.item[0].price}</p>
      </div>
    );
  }
}

export default SimilarListItem;
