//import logo from './logo.svg';
import React, { Component } from 'react';
import CardList from '../components/Cardlist';
import SearchBox from '../components/SearchBox';
import { robots } from '../robots';
import { render } from 'react-dom';
import Scroll from '../components/Scroll';
//import h1 from './fonts/StickNoBills/StickNoBills-VariableFont_wght.ttf';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) });
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div >
      );

  }
}


export default App;
