let person = {
    name: "sarah",
    age: 47
};

console.log(person);

const carBrands = ['toyota', 'lexus', 'mercedes', 'hyundai'];
console.log(carBrands);

function greet(name) {
    console.log('hello'+ " " + name);
}

greet("sarah");

// types of operators in javascript //
/* Arithemetic Operators-- this contains (addition, subtraction, division, multiplication and finding the remainder) */ 
let num = 7;
num--
console.log(num);

/* Relational operators */
let data = 9 > 4;
console.log(data);

/* logical operators  this involves the use of operators like  "And &&, OR ||, NOT!"*/
let x = 7, y = 8, z = 9;
let result = x < y || y > z;

let n = !result;

console.log(result, n);

/* Conditional statements (if else) */
let age = 15;
if(age > 18){
    document.write("eligible to vote");
} else if(age < 18){
    document.write("not eligible to vote")
} else {
    document.write("processing voters card")
}

/* tenary operator */
let sum = 3;
let total 

total = sum%2===0 ? "even" : "odd";


console.log(total);

/* switch case statements */
let day = 'wednessday';

switch(day) {
    case "sunday":
        console.log("8am")
        break;
    case "monday":
        console.log('5am')
        break;
    
    default 
    :console.log("wake whenever");

}

/* Loops */
// while loop //

// initialization of variable //
let i = 5;

// condition test //
while(i<7){
    document.write("hello")
    i++;
}
// Do while loop //
let k = 7;
do 
{
    console.log("Hey")
} while(k<=5);

//for loop //

//  complex objects //
// ie this is when an object has another object nested in it //
 let man = {
    name: "Muktar",
    stack: "MERN",
    laptop : {
        cpu: "i5",
        ram: "8gb",
        ssd:  256,
        brand: "macintosh",
    }
 }

delete man.stack
console.log(man)//

// function retrun and passing //
function greet(user) {

    return (`hello ${user}`)
}
let user = "Sadiq"
let str = greet(user)
console.log(str)

// Arrow Functions //
let voice = (user) => {
    console.log("Hello Navin")
    return 5
}

console.log(voice(user))

let add = (num1,num2) => {
    return num1 + num2
}

let Sum = add;

let Result = Sum(5,6);
console.log(Result)

// Methods in javascript //
/* create a method inside a function */
let Laptop = {
    cpu: "i7",
    Ram: 8,
    model: "macintosh",

    word: () => {
        console.log("pure souls")
    }
}

Laptop.word();

// how to fetch elements from arrarys //
let values = [5,7,9]
values.shift()
console.log(values)


// ARRAY DESTRUCTURING //
let nums = [6,7,5,3,1]
console.log(nums)

let [a,b,,d,,f] = nums;
console.log(b)

let m = 8;
let p = 9;

[m,p] = [p,m]

console.log(m,p)

let arr = "my name is Muktar Sadiq".split(' ')

let [v,c,,...w]  = arr;
console.log(w)

// FOREACH METHOD IN ARRAYS//
let set = [1,2,3,4,5,6,7,8]

set.forEach((n) => {
    console.log(n)
})

// DOM Manipulation //
const body = document.body
const div = document.createElement('div')
//div.innerText = "i miss juice wrld"
div.innerHTML= "<strong>999 forever</strong>"
body.append(div)

/* Fetch API// 
function = getApi() {
    fetch('')
    .then(res => res.json)
    .then(){
        
    }
} */

// Promises in javascript //
let q = new Promise ((resolve, reject) => {
    let c = 1 + 5;
    if(c == 2){
        resolve('sucessfull')
    } else {
        reject('Failed')
    }
})


q.then((message) => {
    console.log('this is in the then' + " " + message)
}).catch((message) => {
    console.log('this is in the catch' + " " + message)
})

// Async Function //
async function plus(a, b) {
    return a + b;
}

plus(1, 2).then((data) => {
    console.log(data);
});

// Classes in avascript //
class Boy{
    constructor(name, birthYear, street){
        this.name = name,
        this.address = birthYear,
        this.street = street


        this.calcAge = function(){
           console.log(new Date().getFullYear() - getbirthYear) 
        }
    }
}

let john = new Boy('John', 1988, 'kunle');
console.log(john)

//Scope in javascript //
/* Global scope */
var t = 40
let r = 30;
 function dcode() {
    return t
 }

/* Function Scope */
function myCode() {
    let h = 100;
}

console.log(y)

/* Block Scope */

// Hoisting //

// Closures //