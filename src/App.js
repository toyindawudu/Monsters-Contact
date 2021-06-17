import React, { Component }from 'react';

import { CardList } from './components/cardList/cardList';
import './App.css';


class App extends Component {

  constructor() {
      super();

      this.state = {
        monsters: []
      };
    }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters:users }));
    }

  render(){

    return (
      <div className="App">
      <CardList />
        {
          this.state.monsters.map(monsters => (<h1>{monsters.name}, {monsters.age}</h1>))
        }
      </div>
    );
  }
}

export default App;
