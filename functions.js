//You see repetition, you make a function
// const movie1 = 'Saving Private Ryan';
// const year1 = 1998;
// console.log(`${movie1} was released in ${year1}`);

// const movie2 = 'Interstellar';
// const year2 = 2014;
// console.log(`${movie2} was released in ${year2}`);

// const movie3 = 'Jason Bourne';
// const year3 = 2016;
// console.log(`${movie3} was released in ${year3}`);

// const printMovie = (movie, year) => {
// console.log(`${movie} was released in ${year}`)
// }

// printMovie('Saving Private Ryan', 1998);
// printMovie('Interstellar', 2014);
// printMovie('Jason Bourne', 2016);

// how to construct an arrow function

// const printName = (name) => {
//     console.log(`I am ${name}!!`)
// }

// printName('Spartacus');

// const calcArea = (x, y) => {
//     let area = x * y;
//     console.log(`The area of a ${x} u x ${y} u rectangle is ${area} square units.`);
// }

// calcArea(25, 50);

// Exercise 1

const logHello = () => {
    console.log(`Hello World`)
}

//logHello();

// Exercise 2
const sayWhatever = (input) => {
    console.log(`I made the computer say: ${input}`)
}
// sayWhatever('Wazzup!')
// Exercise 3
const printNums = () => {
    for(let i = 1; i <= 100; i++) {
        console.log(i);
    }
}
// printNums();
// Exercise 4

myArr = [1, 2, 3, 4, 5];
sum = 0;

const  sumArr = (myArray) =>  {
    for(let i = 0; i < myArray.length; i++) {
        sum = sum + myArray[i];
    }
    console.log(`The sum of the array is ${sum}`);
}

// sumArr(myArr);

// Exercise 5
const students = [
    'Alice',
    'Andrew',
    'Casey',
    'Damian',
    'Grant',
    'Howie',
    'Wade',
    'Kat',
    'Kimbrad',
    'Kiu',
    'Natasha',
    'Obi',
    'Pedro',
    'Sarah',
    'Scott',
    'Tiffany',
    'Zhe',
  ];

  const printStudents = (myArray) => {
      for(i = 0; i < myArray.length; i++) {
          console.log(myArray[i])
      }
  }

  //printStudents(students);

  // Exercise 6
array6 = ["test", "it", "baby", 'yeahhhhh'];

const arrayLength = (myArray) => {
    let returnArray = [];
    for(let i = 0; i < myArray.length; i++){
        let itemLength = myArray[i].length
        returnArray.push(itemLength);
    }
    console.log(returnArray)
}

// arrayLength(array6);
  // Exercise 7

let productPower= (x, y, z) => {
    let prod = (x * y)
    let power = Math.pow(prod, z)
    console.log(`The answer is ${power}`)
}

//productPower(2,3,4);
  // Bonus Exercises
  // 1

  // 2