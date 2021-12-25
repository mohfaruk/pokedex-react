import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 3, name: "Venusaur", type: "grass/poison" },
      { id: 6, name: "Charizard", type: "flying/fire" },
      { id: 9, name: "Blastoise", type: "water" },
      { id: 12, name: "Butterfree", type: "bug/flying" },
      { id: 18, name: "Pidgeot", type: "normal/flying" },
      { id: 25, name: "Pikachu", type: "electric" },
      { id: 34, name: "Nidoking", type: "bug/flying" },
      { id: 39, name: "Jigglypuff", type: "normal" },
      { id: 59, name: "Arcanine", type: "fire" },
      { id: 62, name: "Poliwrath", type: "water/fighting" },
      { id: 65, name: "Alakazam", type: "psychic" },
      { id: 68, name: "Machamp", type: "fighting" },
      { id: 94, name: "Gengar", type: "ghost/poison" },
      { id: 101, name: "Electrode", type: "electric" },
      { id: 103, name: "Exeggutor", type: "grass/psychic" },
      { id: 107, name: "Hitmonchan", type: "fighting" },
      { id: 115, name: "Kangaskhan", type: "normal" },
      { id: 122, name: "Mr-Mime", type: "psychic/fairy" },
      { id: 123, name: "Scyther", type: "bug/flying" },
      { id: 125, name: "Electabuzz", type: "electric" },
      { id: 131, name: "Lapras", type: "water/ice" },
      { id: 133, name: "Eevee", type: "normal" },
      { id: 143, name: "Snorlax", type: "normal" },
      { id: 149, name: "Dragonite", type: "dragon/flying" },
      { id: 150, name: "Mewtwo", type: "psychic" },
    ],
  };

  render() {
    return (
      <div className="pokedex-bg">
        {this.props.pokemon.map(card => (
          <div className="pokedex-card card-title">
            <Pokecard id={card.id} name={card.name} type={card.type} />
          </div>
        ))}
      </div>
    );
  }
}

export default Pokedex;
