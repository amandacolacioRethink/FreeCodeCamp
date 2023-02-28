// Exercício 1
const cloneArray = (arr) => arr.slice(0);

console.log(cloneArray([1, 2, [7, 10]]));

//Exercício 2

const getInitialValues = (arr, num) => {
  if (num === undefined) {
    return arr[0];
  } else if (num < 0) {
    return [];
  } else {
    return arr.slice(0, num);
  }
};

console.log(getInitialValues([1, 2, 3], 2));

//Exercício 3

const concatValues = (arr) => {
  let str = arr.join("");
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      result += ".";
    }
    result += str[i];
  }
  return result;
};
console.log(concatValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 1]));

//Exercício 4

const getShortWords = (arr) => {
  return arr.filter((word) => word.length <= 5);
};
console.log(
  getShortWords([
    "cachorro",
    "pato",
    "oi",
    "família",
    "comer",
    "camping",
    "aquarela",
  ])
);

//Exercício 5
const input = [
  {
    name: "John",
    age: 13,
  },
  {
    name: "Mark",
    age: 56,
  },
  {
    name: "Rachel",
    age: 45,
  },
  {
    name: "Nate",
    age: 67,
  },
  {
    name: "Jennifer",
    age: 65,
  },
];

const processAgeData = (myArray) => {
  const ages = myArray.map((obj) => obj.age);
  const minAge = Math.min(...ages);
  const maxAge = Math.max(...ages);
  const ageDiff = maxAge - minAge;

  console.log([minAge, maxAge, ageDiff]);
};

processAgeData(input);
