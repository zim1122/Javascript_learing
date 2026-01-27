let fruits=['banana','komla','apple','kola','boroi'];
console.log(fruits[2]);
fruits[1]='Jambura';
console.log(fruits);

// problem_2
let place=['Coxsbazar','SaintMartin','Ramna'];
place.push('Rangamati');
place.push('Kurigram','Ju');
place.pop('ju');
console.log(place);

// Checking Array Membership with ‘includes’
let book=['Javascript','Pythonbascis','Cprogramming'];
if(book.includes('Javascript')){
    console.log("Javascript book is here");
}
else{
    console.log("Javascipt book is not here");
}

// Checking if it's an Array
const arr1=[10,20,30,40];
const arr2=['zim','mim','dim'];
const num=10;
const str="Hello";
console.log(Array.isArray(arr1));
console.log(Array.isArray(arr2));
console.log(Array.isArray(num));
console.log(Array.isArray(str));

//  Combining Arrays
let Array1=[1,2,3];
let Array2=[4,5,6];
let combinedArray=Array1.concat(Array2);
console.log(Array1);
console.log(Array2);
console.log(combinedArray);