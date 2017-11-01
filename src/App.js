import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import firebase from 'firebase';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB3i40mpq5TEh0Hsn5WeahXGCumZZ6yfRE",
    authDomain: "fir-pro-3eb25.firebaseapp.com",
    databaseURL: "https://fir-pro-3eb25.firebaseio.com",
    projectId: "fir-pro-3eb25",
    storageBucket: "fir-pro-3eb25.appspot.com",
    messagingSenderId: "969709962349"
  };

  firebase.initializeApp(config);


class App extends Component {
  constructor(){
    super()
    this.state = {}
  }

  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Firebase</h1>
        </header>
        <div>
          <p>your email address is {this.state.email}!</p>
        </div>
      </div>
    );
  }
}

export default App;
