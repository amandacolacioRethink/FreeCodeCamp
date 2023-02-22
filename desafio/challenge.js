import { pokemons } from "./data.js";
import { translatePokemonTypeNames } from "./translatedTypes.js";

//Procurar um pokemon por nome
const lookForPokemonByName = (name) => {
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].name == name) {
      return pokemons[i];
      //console.log(pokemonNome);
    }
  }
};

const listAllPokemonsByType = (type) => {
  var list = [];
  for (let i = 0; i < pokemons.length; i++) {
    if (pokemons[i].type[0] == type || pokemons[i].type[1] == type) {
      list.push(pokemons[i]);
    }
  }
  console.log(list);
};

const changePokemonTypeNamesToPortuguese = () => {
  for (let i = 0; i < pokemons.length; i++) {
    for (let j = 0; j < pokemons[i].type.length; j++) {
      pokemons[i].type[j] = translatePokemonTypeNames[pokemons[i].type[j]];
    }
    console.log(pokemons[i].type);
  }
};
lookForPokemonByName("bulbasaur");
listAllPokemonsOfAType("grass");
changeNameOfPokemonsTypesToPortuguese();
