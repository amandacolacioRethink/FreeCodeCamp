import { pokemons } from "./data.js";
import { traducaoTipos } from "./traducaoTipos.js";

//Procurar um pokemon por nome
const procurarPokemon = (nome) => {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name == nome) {
      return pokemons[i];
      //console.log(pokemonNome);
    }
  }
};

//Listar todos os pokemons de um tipo
const listarPokemon = (tipo) => {
  var lista = [];
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].type[0] == tipo || pokemons[i].type[1] == tipo) {
      lista.push(pokemons[i]); // criar um array pra armazenar todos os pokemons dentro
    }
  }
  console.log(lista);
};

//Alterar o nome dos tipos dos pokemons para ser em português, ex.: Fire => Fogo
const alterarTipoPokemon = () => {
  for (let i = 0; i < pokemons.length; i++) {
    for (let j = 0; j < pokemons[i].type.length; j++) {
      pokemons[i].type[j] = traducaoTipos[pokemons[i].type[j]];
    }
    console.log(pokemons[i].type);
  }
};
procurarPokemon("bulbasaur");
listarPokemon("grass");
alterarTipoPokemon();
