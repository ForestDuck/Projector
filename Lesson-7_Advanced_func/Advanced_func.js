//Ex-1_________________________________________________________________________
// function that finds the sum of all your arguments, regardless of their number
function addThemAll(a, b, ...args) {
  let sum = a + b;
  for (let arg of args) {
      sum += arg;
  }
  return sum;
}

console.log(addThemAll(2, 4));
console.log(addThemAll(1, 2, 3, 4));
console.log(addThemAll(5, 5, 10));


// Ex-2________________________________________________
// Closer function that multiplies two separate numbers
function multiply(a) {
  return function(b) {
      return b * a;
  }
}

console.log(multiply(5)(5))
console.log(multiply(2)(-2))
console.log(multiply(4)(3))

// Ex-3___________________________________________
const movies = [{
      movieName: 'The Thing',
      releaseYear: 1982,
      directedBy: 'Carpenter',
      runningTimeInMinutes: 109,
  },
  {
      movieName: 'Aliens',
      releaseYear: 1997,
      directedBy: 'Cameron',
      runningTimeInMinutes: 137,
  },
  {
      movieName: 'Men in Black',
      releaseYear: 1997,
      directedBy: 'Sonnenfeld',
      runningTimeInMinutes: 98,
  },
  {
      movieName: 'Predator',
      releaseYear: 1987,
      directedBy: 'McTiernan',
      runningTimeInMinutes: 107,
  },
];


// function used to sort the movie array and accept two arguments
// @pram property to sort by
// @pram2 direction of sort 
//This function takes in two arguments, property and direction, and returns a function. When invoked, 
// this returned function takes the two arguments a and b, which are objects with the specified property. 
// Depending on the value of the direction argument, the returned function will compare the value 
// of the property of the two objects a and b and return 1 if the property of a is greater than the property of b, 
// -1 if the property of a is less than the property of b, or 0 if they are the same.
function byProperty(property, direction) {

  return function(a, b) {
      if (direction === '>') {
          if (a[property] > b[property]) {
              return 1;
          }
          if (a[property] < b[property]) {
              return -1;
          }
          return 0;
      } else if (direction === '<') {
          if (a[property] > b[property]) {
              return -1;
          }
          if (a[property] < b[property]) {
              return 1;
          }
          return 0;
      }
  }
}

const sorted = movies.sort(byProperty('releaseYear', '<'));

console.log(sorted)

// Ex-4____________________________________________________________
/*This code creates a detonator timer that counts down 
from the delay specified in the argument.  
It uses the setInterval method to create a loop 
that counts down from the delay argument to 0. 
At 0 the loop will print out "BOOM!" to the console and clear It.*/
function detonatorInterval(delay) {
  let count = delay;
  let initiation = setInterval(function() {
      if (count === 0) {
          console.log('BOOM!')
          clearInterval(initiation);
      }
      if (count > 0) {
          console.log(count)
          count--
      }
  }, 1000)
}

//   detonatorInterval(3)

/*This code creates a detonator timer that counts down 
from the delay specified in the argument. 
It uses the setTimeout() method to start a timer, which will run the startTimer() 
function every 1000 milliseconds, or 1 second. The startTimer() 
function checks if the count is equal to 0, and if so, 
it will console.log('BOOM!') and clear the timer. 
If the count is not equal to 0, it will console.log the current count, 
decrement the count, and then set the timeout again to run startTimer() 
in one second.
    */
function detonatorTimeout(delay) {
  let count = delay;
  const timer = setTimeout(function startTimer() {
      if (count === 0) {
          console.log('BOOM!');
          clearTimeout(timer);
      } else {
          console.log(count)
          count--;
          setTimeout(startTimer, 1000);
      }
  }, 1000);
}

detonatorTimeout(3)

//Ex-5______________________________________________________________________________________
let me = {
  name: 'Andrii',
  residency: 'Lviv',
  gender: 'male',
  age: 27,
  hobby: 'gaming',
  defaultStatus: 'free',
  currentStatus: 'busy',
  introduce() {
      console.log(`My name is ${this.name} I am ${this.age} and I live in ${this.residency}`);
  },
  fact() {
      console.log(`I was born ${4050-(2022-this.age)} years later after the Egypt pyramids were build`);
  },
  describeMyStatus() {
      console.log(`Mostly I'm ${this.defaultStatus}, but now I'm ${this.currentStatus}`);
  }
}

// Ex-6___________________________________________________________________
// Using bind to show which method in which  object we are using

let securedIntroduce = me.introduce.bind(me)
let securedFact = me.fact.bind(me)
let securedDescribeMyStatus = me.describeMyStatus.bind(me)

setTimeout(securedIntroduce, 1000);
setTimeout(securedFact, 2000);
setTimeout(securedDescribeMyStatus, 3000);

// Ex-7_________________________________________________________________________________

function someFunction() {
  console.log("Hey you are so patient")
}

function someFunction2() {
  console.log("Hoooooo")
}
/*
The slower() function takes a func as the first argument and 
a seconds as the milliseconds timeout. 
It returns a new function which is a wrapper around the original function.
The wrapper will call the original function after the specified timeout. 
The wrapper will also keep the original function's context and arguments.*/

function slower(func, seconds) {
  console.log(`Chill out, you will get you result in ${seconds} seconds`)
  return function() {
      setTimeout(function() {
          func.call(this, arguments);
      }, seconds * 1000);
  };
}

let slowedSomeFunction = slower(someFunction, 6);

slowedSomeFunction()


