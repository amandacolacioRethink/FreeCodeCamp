let user = {
  name: "Thiago",
  number: 10,
  address: {
    street: "Rua 1",
    number: 20,
  },
  color: function () {
    console.log("Green");
  },
  date: new Date(),
};

let userClone = JSON.parse(JSON.stringify(user));

user.address.street = "Rua 2";
console.log(user, userClone);
