
// Activity 1


const person1 = {
  name: "Constantin",
  age: 30,
};

// Activity 2


const alarm = {
  weekendAlarm: "no alarm needed",
  weekdayAlarm: "get up at 7am",
};

let day = "Tuesday";
let alarmMessage;

if (day === "Saturday" || day === "Sunday") {
  alarmMessage = alarm.weekendAlarm;
} else {
  alarmMessage = alarm.weekdayAlarm;
}

console.log(alarmMessage);


// Activity 3


const person2 = {
  name: "Constantin",
  age: 30,

  favoriteSongs: [
    "Perfect - Ed Sheeran",
    "Hello - Adele",
    "Shape of You - Ed Sheeran",
  ],
};

console.log(person.favoriteSongs);


// Activity 4


const person3 = {
  name: "Constantin",
  age: 30,
  sayHi: function () {
    return `Hello my name is ${this.name}`;
  },
};

console.log(person.sayHi());