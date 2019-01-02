/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import SimilarListItem from './SimilarListItem.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // mainItem: 1,
      // itemOne: [1, []],
      // itemTwo: [2, []],
      // itemThree: [3, []],
      // itemFour: [4, []],
      similarItemsId: [1, 2, 3, 4],
      similarItemsData: [],
      // photos: [],
    // eslint-disable-next-line semi
    }
    this.getFullData = this.getFullData.bind(this);
  }

  componentDidMount() {
    this.setState({
      similarItemsData: [],
    });
    // this.getFullData(this.state.itemOne);
    // this.getFullData(this.state.itemTwo);
    // this.getFullData(this.state.itemThree);
    // this.getFullData(this.state.itemFour);
    for (let i = 0; i < this.state.similarItemsId.length; i += 1) {
      this.getFullData(this.state.similarItemsId[i]);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  getFullData(input) {
    axios.get(`/api/items/${input}`)
      .then(({ data }) => {
        const temp = [...this.state.similarItemsData];
        temp.push(data);
        this.setState({
          similarItemsData: temp,
        });
        // console.log('state client side', this.state.similarItemsData);
      })
      .catch((error) => {
        console.error('error getting from client', error);
      });
  }

  render() {
    return (
      <div className="TheWholeThing">
        <div id="title">You may also like</div>
        <div className="itemContainer">
          {this.state.similarItemsData.map((item) => {
            return <SimilarListItem item={item} />;
          })}
        </div>
        <br />
      </div>
    );
  }
}

export default App;
