import { pokemons } from "./data.js";

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
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].type[0] == tipo || pokemons[i].type[1] == tipo) {
      var lista = [];
      lista.push(pokemons[i]); // criar um array pra armazenar todos os pokemons dentro
      //console.log(lista);
      return lista;
    }
  }
};

//Alterar o nome dos tipos dos pokemons para ser em português, ex.: Fire => Fogo
