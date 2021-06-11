import React, { Component }from 'react';
import './App.css';


class App extends React.Component {

  constructor() {
      super();

      this.state = {
        monsters: [
          {
            name: 'Frankenstein',
            age: 45
          }, 
          {
            name: 'Chucky',
            age: 49
          },
          {
            name: 'Zombie',
            age: 53
          }
        ],

      };
    }

  render(){

    return (
      <div className="App">
        {
          this.state.monsters.map(monsters => <h1>{monsters.name}, {monsters.age}</h1>)
        }
      </div>
    );
  }
}

export default App;
