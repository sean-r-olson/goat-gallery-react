import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList'


class App extends Component {
  
  // state, which will be manipulated to reflect our data being pulled from /gallery
  state = {
    goatList: [],
    }
  
  // our 'onReady' function, calling our GET 
  componentDidMount() {
    this.getGoats();
  }

  // make axios call to /gallery to get data, which we'll set as our new goat array (of objects)
  getGoats = () => {
    console.log('in getGoats');
    axios.get('/gallery')
    .then( response => {
      this.setState({
        goatList: response.data,
      })
    }).catch(error => {
      console.log('error getting goats to frolic back to the client', error);
    })
  }

  // call render to display, or render, our content to the DOM
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">#GoatLife</h1>
        </header>
        <br/>
       <GalleryList goatList = {this.state.goatList} getGoats = {this.getGoats}/>
      </div>
    );
  }
}

export default App;
