import React, { Component } from "react";
import Pokecard from "./Pokecard";
import Pokedex from "./Pokedex";

class App extends Component {
  render() {
    return (
      <div className>
        <h1>FARUK'S POKEDEX</h1>
        <Pokedex />
      </div>
    );
  }
}

export default App;
