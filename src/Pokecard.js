import React, { Component } from "react";

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let threeDigits = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    let pokeImg = `${POKE_API}${threeDigits(this.props.id)}.png`;

    return (
      <div>
        <img src={pokeImg}></img>
        <p>{this.props.name}</p>
        <p>no. {this.props.id}</p>
        <p>type: {this.props.type}</p>
      </div>
    );
  }
}

export default Pokecard;
