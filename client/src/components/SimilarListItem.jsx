/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import ListItemColors from './ListItemColors.jsx';

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
    };
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
        <img src={this.props.item[0].colors[0].photos[1].photo_url} alt="" />
        <ListItemColors colors={this.props.item[0].colors} />
        <br />
        <div />
        <p>{this.props.item[0].name}</p>
        <p>{this.props.item[0].price}</p>
      </div>
    );
  }
}

export default SimilarListItem;
