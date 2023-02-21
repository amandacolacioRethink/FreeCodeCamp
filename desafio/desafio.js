import { pokemons } from "./data.js";

function ProcurarPokemon(nome) {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name == nome) {
      var poke = pokemons[i];
      console.log(poke.type[1]);
    }
  }
}

ProcurarPokemon("bulbasaur");
