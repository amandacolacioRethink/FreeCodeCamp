import { pokemons } from "./data.js";
import { translatePokemonTypeNames } from "./translatedTypes.js";

const lookForPokemonByName = (name) => {
  const filterPokemonByName = pokemons.find((pokemon) => pokemon.name === name);
  console.log(filterPokemonByName || null);
};

const listAllPokemonsByType = (type) => {
  const filterPokemonByType = pokemons.filter((pokemon) =>
    pokemon.type.includes(type)
  );
  console.log(filterPokemonByType);
};

const changePokemonTypeNamesToPortuguese = () => {
  const translatedTypes = pokemons.map((pokemon) => {
    //mapeando todos os pokemons para receberem os tipos traduzidos
    const translated = pokemon.type.map(
      (type) => translatePokemonTypeNames[type]
    ); //contém os nomes dos tipos do pokemon atual traduzidos para português utilizando o objeto
    return { ...pokemon, type: translated }; //retornar para translatedTypes cada pokemon com o tipo traduzido
  });
  console.log(translatedTypes);
};

lookForPokemonByName("bulbasaur");
listAllPokemonsByType("grass");
changePokemonTypeNamesToPortuguese();
