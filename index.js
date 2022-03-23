console.log("Here is my first console log!");

let PumpkinColor = 'Purple';
const variableName = "orange";

console.log("The princess said,  \\ Purple Pumpkins Are Pretty");
console.log(1);
console.log(-1);
console.log(1.5);

let myBoolean = true;
let isWarmOut = false;

let dinnerTonight;
let dinnerTomorrowNight = undefined;
console.log(myBoolean)
console.log(isWarmOut)

let anything = null;
console.log(anything)

let me = {
    name: 'Amanda',
    haircolor: 'green',
    eyecolor: 'red',
    gender: 'female',
    age: 31,
    birthday: 'February22',
    kids: ['Kobe', 'Kort'],
    favoritefoods: ['chocolate', 'pasta', 'salad', 'cupcakes']
};
// Bracket notation, respone is name
console.log(me)
console.log(me.name)

let color = "purple";
console.log(typeof color);
color = false;
console.log(typeof color)

// Function w/o parameters
function greeting() {
    console.log('Hello!');
}
// Function with parameters and a list of 3 things
greeting();
function greeting2(greeting) {
    console.log(greeting);
}
greeting2("Hola");

function greeting3(greeting, firstName, lastName) {
    console.log(greeting, firstName, lastName);
}
greeting3("Hi", "Amanda", "Heer");
