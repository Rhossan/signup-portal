import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Modal from './Modal';
import Session from './Session';

class App extends Component {

  constructor(props){
    super(props);

    this.state ={}
  }

  render() {
    return (
        <Session />
    );
  }
}

export default App;
