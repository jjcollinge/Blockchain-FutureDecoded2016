import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';

var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var abi = {};
var address = '';

var contract = web3.eth.contract(abi).at(address);

class App extends Component {
  constructpr(props) {
    super(props) 
    this.state = {
        opAVotes = 0,
        opBVotes = 0
    }
  }

  componentWillMount() {
    var data = contract.getVotes();
    this.setState({
      opAVotes = data[0],
      opBVotes = data[1]
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to a dApp built with React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
