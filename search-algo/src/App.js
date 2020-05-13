import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    linearResults: '', 
    binaryResults: '',
    count: 0,
  }
  
  //Linear Search

  indexOf(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) {
            return i+1;
        }
    }
    return -1;
  };

  //Binary Search 
  binarySearch = (array, value, start, end) => {
    start = start === undefined ? 0 : start;
    end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);

    this.setState(prevstate => ({ 
      count: prevstate.count + 1
    }));

    if (item == value) {
        return index;
    }
    else if (item < value) {
        return this.binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return this.binarySearch(array, value, start, index - 1);
    }
  };

  handleClick = (e) => {
    e.preventDefault()

    let dataStr = '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5'

    let dataArr = dataStr.split(' ')

    let val = e.target['searchValue'].value
    console.log(val)
    let linear = this.indexOf(dataArr, val)
    let sorted = dataArr.sort()
    let binary = this.binarySearch(sorted, val)
    this.setState({
      linearResults: linear,
      binaryResults: binary,
    })
    return 
  }

  render () {
    let linearResults
    return (
      <div className="App">
        <form name="searchFor" onSubmit={this.handleClick}>
          <label htmlFor="searchValue">Search For:</label>
          <input type="text" name="searchValue"></input>
          <button type="submit">Search</button>
          <p>Linear: {this.state.linearResults ? 'this search took ' + this.state.linearResults + ' iterations to find your value' : ''} </p>
          <p>Binary: {this.state.count ? 'this search took ' + this.state.count + ' iterations to find your value' : ''}</p>
        </form>
      </div>
    )
  }
}

export default App;
