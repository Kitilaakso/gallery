//import logo from './logo.svg';
//import React, { Component, useState, useEffect } from 'react';
import React, { Component, useState, useEffect } from 'react';
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
//import { robots } from '../robots';
//import { render } from 'react-dom';
import Scroll from '../components/Scroll';
//import h1 from './fonts/StickNoBills/StickNoBills-VariableFont_wght.ttf';

import './App.css';
//import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchfield, requestRobots } from '../actions.js'
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    /* redux
    searchField: state.searchField*/
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchfield(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()) /*requestRobots(dispatch)*/
  }
}
/* LUOKKA*/

class App extends Component {
  /**reduxissa, asyncissa pois
   *   constructor() {
     super()
     this.state = {
       robots: []//,
       //reduxissa pois  searchfield: ''
     }
   }
   */
  /* jos halutaan käyttää functiota componentDidMountin sijaan
  
  function App() {
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    const [count, setCount] = useState(0)*/

  componentDidMount() {
    /* reduxissa tämä, async pois
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => { this.setState({ robots: users }) });
        */
    this.props.onRequestRobots();
  }

  /*KUN käytetään functiota ja count mukana
   <button onClick={() => setCount(count + 1)}>Click!</button>
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { setRobots(users) });
  }, [count]) //only run if count chances*/

  /*REDUX pois
  onSearchChange = (event) => {
    //functiossa const onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    //functiossa setSearchfield(event.target.value)
  }*/
  //class
  render() {
    /*classissa
    const { robots, searchfield } = this.state;*/
    /*reduxin lailla alla
    const { robots } = this.state;*/
    const { searchField, onSearchChange, robots, isPending } = this.props;
    //functiossa const filteredRobots = robots.filter(robot => {
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    //funtiossa  <SearchBox searchChange={this.onSearchChange} />
    //redux return !robots.length ?
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>

            <CardList robots={filteredRobots} />

          </Scroll>
        </div >
      );

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
