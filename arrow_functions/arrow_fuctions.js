//Exercício 1
const doubleANumber = (number) => number * 2;
console.log(doubleANumber(6));

//Exercício 2
const createFullName = (firstName, lastName) => firstName + " " + lastName;
console.log(createFullName("Amanda", "Colacio"));

//Exercício 3
const calculateTheLenghtOfAString = (str) =>
  console.log(`o tamanho de "${str}" é:`, str.length);
let longestCityNameInTheWorld =
  "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu";
calculateTheLenghtOfAString(longestCityNameInTheWorld);

//Exercício 4
const calculateTheLenghtOfAString2 = (str) => {
  let length = str.length;
  console.log(`o tamanho de "${str}" é:`, length);
};
calculateTheLenghtOfAString("willynilly");

//Exercício 5
let alerts = [
  "Você é bem legal",
  "Você é inteligente",
  "Que bom trabalhar contigo",
];
const showRandomAlert = (name) => {
  alert(alerts[Math.floor(Math.random() * alerts.length)] + `, ${name}!`);
};
console.log(showRandomAlert("Maria"));

//Exercício 6
let myArray = ["2", "10", "15"];
const getEvenNumbers = (array) => array.filter((num) => num % 2 === 0);
console.log(getEvenNumbers(myArray));

//Exercício 7
const userObject = {
  name: "John",
  surname: "Doe",
  age: 40,
  location: {
    latitude: 43,
    longitude: 12,
  },
};

const displayUser = (user) =>
  user.name + " " + user.surname + " (" + user.age + ")";
const output = displayUser(userObject);
console.log(output);
