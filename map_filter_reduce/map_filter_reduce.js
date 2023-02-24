//Atividade de exemplo com reduce
//array utilizado para outros exercícios
let voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

const total = voters.reduce((acc, el) => (el.voted ? acc + 1 : acc), 0);
console.log(total);

// Exercício 1
function total(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(total([1, 2, 3]));

//Exercício 2
function stringConcat(arr) {
  return arr.reduce((acc, curr) => acc + curr.toString(), "");
}
console.log(stringConcat([1, 2, 3]));

//Exercício 3
const totalVoters = voters.reduce(
  (acc, curr) => (curr.age < 30 && curr.voted ? acc + 1 : acc),
  0
);
console.log(totalVoters);

// Exercício 4
const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 },
];

const shoppingSpree = wishlist.reduce((acc, curr) => acc + curr.price, 0);
console.log(shoppingSpree);

//Exercício 5

// com if e else
// const votersResult = voters.reduce((acc, curr) => {
//     if (curr.age < 26) {
//       acc.numYoungPeople++;
//       if (curr.voted) {
//         acc.numYoungVotes++;
//       }
//     } else if (curr.age < 41) {
//       acc.numMidsPeople++;
//       if (curr.voted) {
//         acc.numMidVotesPeople++;
//       }
//     } else {
//       acc.numOldsPeople++;
//       if (curr.voted) {
//         acc.numOldVotesPeople++;
//       }
//     }
//     return acc;
//   }, {
//     numYoungVotes: 0,
//     numYoungPeople: 0,
//     numMidVotesPeople: 0,
//     numMidsPeople: 0,
//     numOldVotesPeople: 0,
//     numOldsPeople: 0,
//   });

// operador ternario
const votersResult = voters.reduce(
  (acc, curr) => {
    curr.age < 26
      ? (acc.numYoungPeople++, curr.voted && acc.numYoungVotes++)
      : curr.age < 41
      ? (acc.numMidsPeople++, curr.voted && acc.numMidVotesPeople++)
      : (acc.numOldsPeople++, curr.voted && acc.numOldVotesPeople++);
    return acc;
  },
  {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  }
);

console.log(votersResult);
