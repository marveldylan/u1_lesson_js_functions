# JavaScript Functions

![Functions](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.medianic.co.uk%2Fwp-content%2Fuploads%2F2019%2F01%2Fpractice-javascript-and-learn-functions-400x277.png&f=1&nofb=1)

## Lesson Overview
In this lesson, we'll learn all about functions in JavaScript.

## Objectives
  - Learn the definition of a function
  - Identify the parts of a function
  - Differentiate between function defintions and function invocations

## Lesson Instructions

![Bueller](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn0.vox-cdn.com%2Fthumbor%2Faq1_iMjpkbMa06eymrPD0cEvIOs%3D%2Fcdn0.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F2539902%2Fgiphy.0.gif&f=1&nofb=1)

**Function** is a term that comes out of mathematics. You may remember hearing it in your high school algebra class.

The basic idea of a function is simple — it's a relationship between a set of inputs and a set of outputs.

### Introduction: Functions

Take a look at the relationship between variable `x` and function `f` in this example.

Function `f` takes the input `x` and spits out a single output ( `f(x)` ).

Can you guess what this function does to the value of `x`?

```
f(-2) => -4
f(-1) => -2
f(0) => 0
f(1) => 2
f(2) => 4
```

Assuming that it's the same function, what is the output of:

`f(f(3))`

### Why are functions useful?

In JavaScript, a function can be:

1.  Made up of either a single reusable statement or a group of reusable statements.
2.  Called from anywhere in the program, which allows for the statements inside a function to not be written over and over again.

Functions are especially useful because they enable a developer to segment large, unwieldy applications into smaller, more manageable pieces. You might hear this described as making the code modular. Modularity is good.

#### Example of using a function

Here's an example of what a function can do:

This repeats for every additional movie.

```js
const movie1 = 'Saving Private Ryan';
const year1 = 1998;
console.log(`${movie1} was released in ${year1}`);

const movie2 = 'Interstellar';
const year2 = 2014;
console.log(`${movie2} was released in ${year2}`);

const movie3 = 'Jason Bourne';
const year3 = 2016;
console.log(`${movie3} was released in ${year3}`);
```

![Interstellar](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F12H0jWEKSo0N8c%2Fsource.gif&f=1&nofb=1)

This is all easy enough to write out, but if we have a lot of movies, this results in a lot of repeated code! Also, if we want to change the formatting, we have to change it in every place.

Let's try to keep our code from getting out of hand by using a function.

```js
const printMovie = (movie, year) => {
  console.log(`${movie} was released in ${year}`);
};

printMovie('Saving Private Ryan', 1998);
printMovie('Interstellar', 2014);
printMovie('Jason Bourne', 2016);
```

Notice how much cleaner and simpler this function looks than our repeated lines of code?

Using functions is a great way to save time for yourself, and simplify things for your team members.

![DRY](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2FlqrJPaWIsjTZS%2Fgiphy.gif&f=1&nofb=1)

#### DRY - Don't repeat yourself

Functions are a critical component of programming because they allow us to execute on a key tenant of engineering:

"**D**on't **R**epeat **Y**ourself" (aka "DRY" code).

Our goal is to craft our programs in as few lines of code as possible, while still being clear.

##### Why should we avoid repetition?

1.  **Performance -** Having repeated code will lead to longer scripts. Longer scripts take up more memory and will take more time to load, which can make a website seem slow.

2.  **Maintainability -** Imagine that we have the same line of code repeated 10 times in our program. If we ever want to change that functionality, we would have to search for all 10 places where that code is repeated and make 10 individual changes.

#### Why use functions - Summary

[Check out this link to review the three main reasons that functions are created.](http://circuits-assets.generalassemb.ly/prod/asset/5016/Slide-17-Chart.svg)

---

## Arrow Function Expressions

Now we know what functions are and why we use them. But how do we create them?

As you saw in our movie example, just as we do with a variable, we must define a function before we call or "use" it.

In JS, functions can be defined in several ways. We will be focusing on using **arrow function expressions**

#### Function Expressions - Overview

Let's take a look at the different parts of the arrow function:

```js
const pickADescriptiveName = () => {
  // code block
}
// 'pickADescriptiveName' is the function name
// the parenthesis and arrow are short hand for the declaration of a function...also known as an arrow function
// parentheses are needed and can have optional, multiple parameters, or defualt parameters
```

Have you ever tried to move forward to the next page of an online form, only to be greeted by an alert that says "Please fill out all the required fields"?

This kind of code can be placed in a function and this function can be called anytime the user hasn't filled out a field on any form on the site. Let's code for this popup alert using a function expression:

```js
const errorAlert = () => {
  alert('Please be sure to fill out all required fields');
}
```

Let's take a look at the function in more detail:

1.  The first line begins by declaring a variable called `errorAlert`. This is the name that we can then use to call that function.
2.  Next, you have a list of parameters surrounded by parentheses.  In a very specific case you can omit the parenthesis, however, we suggest that you include the parentheses as you are gaining familiarity with functions.
3.  The statements inside the function will run every time the function is called. The function body must always be wrapped in curly braces `{ }`, even when it consists of only a single statement. **NOTE** that there is an exception to this rule as well, however, we will still encourage you to always use curly braces as you are getting comfortable with functions.

#### Naming Conventions

Now that we've learned about arrow functions, let's discuss naming conventions.

You may have noticed how we capitalize names in JavaScript using the camelCase style.

Let's take a quick look at some good and bad examples of function names, and what can cause them to break down:

- **Ugly:** thisfunctioncalculatestheperimeterofarectangle
  (no camelCase, too verbose)

- **Bad:** my new function
  (contains spaces)

- **Bad:** myNewFunction
  (doesn't explain what it does!)

- **Good:** calculateArea
  (describes what it does, short, and uses camelCase)
  
![GBU](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F7ZgBm32jWGn72%2Fgiphy.gif&f=1&nofb=1)

#### Calling a function

To run the code in a function, we **call**, or invoke, the function by using the function name followed by parentheses.

Remember our function printMovie?

What happens if we just type `printMovie`?

Now we add the parentheses.

```js
printMovie();
```

### Arguments and Parameters

#### Syntax - Parameters & Arguments

**Parameters** are the names listed in the function definition.

Let's write a function that calculates the area of a rectangle.

We need to provide our `area` function with a width and a length so we won't need to create a separate function every time we want to measure the dimensions of a new room.

```js
const area = (width, length) => {
  console.log(width * length);
}

area(5, 3); // 15
area(12, 16); // 192

```

1. Width and length are our parameters. Note that they are in a comma separated list. This tells our function that we are going to give it a width and a length.
2. There is nothing special about the words `width` and `length` here. These are just descriptive names to remember what information that is being given to our function. We could use other names as well i.e. `width` and `height`, `l` and `w`, etc
3. When the name of the function is followed by `()` the function is being called. By passing comma separated values in between the parentheses (i.e. arguments) correlate to the name of the parameters when the function was declared. Ex: `5` relates to `width` and `3` relates to `length`. Note that the order does matter.

To write functions with more than one parameter, use a comma separated list:

e.g., (parameter1, parameter2, parameter3, parameter4, etc.)

Here is an example of a function with four strings as parameters:

```js
const greetUser = (firstName, lastName, year, city) => {
  console.log(`Hello ${firstName} ${lastName}, I was born in ${year} and I'm from ${city}.`)
}
```

> Check: What would happen if we called the function with the following arguments?

```js
greetUser('Bruce', 'Wayne', 1939, 'Gotham');
```

![Batman](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2F3xz2BLBOt13X9AgjEA%2Fgiphy.gif&f=1&nofb=1)

> What would happen if we didn't provide all of the parameters?

The code in a function will not run when the function is defined. The code will only run when the function is called.

### Exercise:

1.  Write a function that console.logs 'Hello World'
2.  Write a function that console.logs whatever you want it to say
3.  Write a function that prints every number between 1 and 100
4.  Write a function that takes an array of numbers as a parameter and adds each element of that array to a counter and prints the final value of the counter (i.e. the sum of all of the numbers in the array).
5.  Write a function that loops over the following array of SEI students and prints out their name.

```js
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
```

6.  Write a function that takes an array of strings as a parameter and returns an array of numbers corresponding to the lengths of each word.
    e.g. passing this function an array `['i', 'am', 'the', 'best']` should give you back `[1, 2, 3, 4]`
    Hint: you can call .length on a string!
7.  Write a function that takes 3 parameters and returns one number, which is the product of the first two numbers raised to the power of the third.
    e.g. passing this function `1, 2, 3` should give you back the answer to `(1 * 2)^3`

#### Bonus Functions!

1.  Write a function that prints every EVEN number between 1 and 100
2.  Recreate the Fibonacci sequence between 1 and 20. If you don't know what that is, DuckDuckGo is your best friend!

---

### Return Statements

So far, the functions that we have created have simply printed the result of whatever logic we have defined to operate in the function.  

However, we might want our functions to _return_ a value back to our program or even exit a function before it runs some logic.

We can accomplish these tasks by using the `return` keyword inside of our function definitions.

#### Why use return statements?

Sometimes we don't necessarily want to show or log something immediately to the console, or update something on the page.

Instead, we might just want to update a variable within a function, or even call another function without showing its effects.

To do this, we use `return` statement.

Let's look at an example of updating a variable within a function.

```js
const doubleValue = (x) => {
  return x * 2;
};
```

The `return` statement _stops the execution of a function_ and returns a value from that function.

#### Storing a return value in a variable

When we `return` something, it ends the function's execution and "spits out" whatever we are returning.

We can then store this returned value in another variable.

#### Exiting a function

We can also use `return;` by itself as a way to stop the function and prevent any code after it from running.

Take a look at this example:

```js
const rockAndRoll = (muted) => {
  const song = 'Yellow Submarine';
  const artist = 'The Beatles';

  if (muted) {
    return; // Here we use return as a way to exit a function, instead of returning any value
  }

  console.log(`Now playing: ${song} by ${artist}`);
};

rockAndRoll(true);
```

![Beatles](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.giphy.com%2Fmedia%2F2kMQxlmpgVGlxSvT23%2Fgiphy.gif%3Fcid%3D3640f6095c5a818659526164635015da&f=1&nofb=1)

Here, we use `return;` as a way to exit the function instead of returning any value.

So when we call the function passing in `true` as an argument for `muted`, the log statement will never run.

How can we modify our area function to return our value instead of printing it?

---

## Lesson Recap

Functions are very important in JavaScript, and you must have a thorough understanding of how to define them, as well as how you can use them.

## Resources
  - [Why use functions?](http://circuits-assets.generalassemb.ly/prod/asset/5016/Slide-17-Chart.svg)
  - [Declarations & Expressions Video](https://generalassembly.wistia.com/medias/g1w03wkvth)
  - [When to Use Declarations & Expressions](https://www.freecodecamp.org/news/when-to-use-a-function-declarations-vs-a-function-expression-70f15152a0a0/)
