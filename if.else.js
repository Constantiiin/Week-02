// Activity 1


let age = 18;
let country = "UK";

if (age > 17 && country === "UK") {
  console.log("Yes, I can serve you.");
} else {
  console.log("You are not old enough.");
}


// Activity 2


let topping = "Cheese";

switch (topping) {
  case "Garlic":
  case "Pepper":
  case "Pepperoni":
    console.log(`These are important ingredients for my pizza.`);
    break;

  case "Olives":
    console.log(`I don't mind having ${topping} on my pizza.`);
    break;

  default:
    console.log(`${topping} should not be on my pizza.`);
}


// Activity 3


let password = "car";

if (password.length < 8) {
  console.log("The password is too short.");
} else {
  console.log(password);
}

let num = 4;

if (num % 3 === 0 || num % 5 === 0) {
  console.log("This number is divisible by 3 or 5.");
} else {
  console.log("This number is not divisible by 3 or 5.");
};

//Activity 4

let num1 = 10;

if (num1 % 3 === 0 && num1 % 5 === 0) {
  console.log("fizz buzz");
} else if (num1 % 3 === 0) {
  console.log("fizz");
} else if (num1 % 5 === 0) {
  console.log("buzz");
} else {
  console.log(num1);
};

//Activity 6

let time = 7;
let placeOfWork = "Airport";
let townOfHome = "Liverpool";

if (time === 7) {
  console.log(`At ${time}, I'm at ${townOfHome}.`);
} else if (time === 8) {
  console.log("I'm commuting.");
} else if (time === 9) {
  console.log(`At ${time}, I'm at ${placeOfWork}.`);
} else {
  console.log("I'm somewhere else.");
}