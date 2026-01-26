/**
 * 3 types of operator
 * 1.Arithmetic operator:+,-,*,/,%
 * 2.Comperasion Operator:==,===,>,<,<=,>=
 * 3.Logical operator: &&,||,!
 */

//Arithmatic operator
// let bangla=85;
// let english=65;
// console.log(bangla+english);
// console.log(bangla-english);
// console.log(bangla*english);
// console.log((bangla/english).toFixed(2));
// console.log(11%2);

// comparison operator always output bolean value
let physics=50;
let math="50";
// console.log(physics==math);//double equal checks only value
// console.log(physics===math);//triple equal checks both value and data type

// let biology=66;
// let ict=65;
// console.log(biology>=ict);
// console.log(biology!=ict);

//logical opearator
// let isMatured=false;
// let isInsterested=true;
// let isRich=false;

// let isMarried=isInsterested && isMatured && isRich;
// console.log(isMarried);

/**
 * logical operator with or
 */
let isMatured=false;
let isInsterested=true;
let isRich=false;

let isMarried=isInsterested || isMatured || isRich;
console.log(isMarried);
console.log(!isMarried);
