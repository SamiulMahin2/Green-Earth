[Live Link](https://samiulmahin2.github.io/Green-Earth/)

1) What is the difference between var, let, and const?

Answer- Difference between var, let and const:-

var- var is global scope element. For example, if declare a variable with var inside a function or loop, still we will be able to access the variable from outside of the function or the loop. And also we can access a variable declared with var before initialization. If we declare a variable with var we will still be able to redeclare another variable with the same name which we used before and we won't be shown any error.

let- by default let is a block scope element. We can access let just where we declare it and we can't access a variable before initialization. If we redeclare a variable by let with the same name which we have used before it will show an error. But we can change the value of a variable if we declare it with let.

const- by default const is also a block scope element. We can access const just where we declare it and we can't access a variable before initialization. If we redeclare a variable by const with the same name which we have used before it will show an error. We can't change the value of a variable if we declare it with const.

2) What is the difference between map(), forEach() and filter()?

Answer- Difference between map(), forEach() and filter():-

map()- map() is the functionality which we use for array. By using map() we can modify the array as we want and it will return the modified array.

forEach()- forEach() is a functionality through which we can run a loop which actually works like the other traditional loop. Syntax of forEach() is-
array.forEach(arr =>{
    //my code here
})

filter()- Throughout filter() we can sort out the element from an array according to our condition and can get the return of the new array.

3) What are arrow functions in ES6?

Answer- Arrow functions' activities are as same as the traditional functions. Just there is small difference between the these two in their syntax. 

Traditional functions syntax-
function functionName (parameters) {
    //code to execute
    return value;
}
In traditional functions if we want to get the value form outside we have to always return the value.

Arrow functions syntax- 
const/let variable = (parameter) => {
    //code to execute
}
In arrow functions if there is just on line code then we don't have to return the value manually. But if there is more than one line code we have to return the value manually.

4) How does destructuring assignment work in ES6?

Answer- Destructuring is a method through which we can pack the every element of array or object into a variable. Syntax of destructuring method is-
let numbers = [1, 2, 3, 4];
let [a, b, c, d] = numbers;
Now 1 is stored to a, 2 is stored to b, 3 is stored to c, 4 is stored to d.

5) Explain template literals in ES6. How are they different from string concatenation?

Answer- In js if we console a sentence which contains different types of data like number, string, boolean and if we want to make the console fully string converted then we need to use template literals. Syntax of template literals is:-
`The words we use to describe to the intro- , ${dynamic value}`

On the other hand, string concatenation is slightly tough to read. Syntax of string concatenation is:-
"The words we use to describe to the intro " + " - " + " , " + the variable which contains the desired value.