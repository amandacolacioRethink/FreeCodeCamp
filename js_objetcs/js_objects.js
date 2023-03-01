let programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};

//Exercício 1
const addNewLanguage = (language) => programming.languages.push(language);
addNewLanguage("C#");

//Exercício 2
const changeDifficulty = (difficulty) => (programming.difficulty = difficulty);
changeDifficulty(8);

//Exercício 3
const deleteKeyFromObject = () => delete programming.jokes;
deleteKeyFromObject();

//Exercício 4
const addNewKey = () => (programming.IsFun = true);
addNewKey();

//Exercício 5
const showAllLanguages = () => console.log(programming.languages);
showAllLanguages();

//Exercício 6
const showAllNamesKeys = () => console.log(Object.keys(programming));
showAllNamesKeys();

//Exercício 7
const showAllValues = () => console.log(Object.values(programming));
showAllValues();
