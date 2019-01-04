/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable import/extensions */
/* eslint-disable arrow-body-style */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import axios from 'axios';
import SimilarListItem from './SimilarListItem.jsx';
import style from '../../dist/styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      similarItemsId: [],
      similarItemsData: [],
    };
    this.getFullData = this.getFullData.bind(this);
    this.fillData = this.fillData.bind(this);
  }

  componentWillMount() {
    let rands = [];
    for (let j = 0; rands.length < 4; j += 1) {
      let nextInput = Math.floor(Math.random() * 13) + 1
      if (!rands.includes(nextInput)) {
        rands.push(nextInput);
      }
    }
    this.setState({
      similarItemsId: rands,
      similarItemsData: [],
    });
  }

  componentDidMount() {
    this.fillData();
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
      })
      .catch((error) => {
        console.error('error getting from client', error);
      });
  }

  fillData() {
    for (let i = 0; i < this.state.similarItemsId.length; i += 1) {
      this.getFullData(this.state.similarItemsId[i]);
    }
  }

  render() {
    return (
      <div className="TheWholeThing">
        <div className={style.title}>You may also like</div>
        <div className={style.itemContainer}>
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
