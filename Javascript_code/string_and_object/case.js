const school='Rajuk uttara model school';
// console.log(school.toLowerCase());
// console.log(school);
const subject='Chemistry';
const book='ChemIsTry';
if(subject.toLowerCase()===book.toLowerCase()){
    console.log('Iam reading Book eibar exam e fatai felbo');
}
   else{
    console.log('Ami mara khabo');
   } 
const drink=' water';
const liquid=' water ';
// if(drink===liquid){
//     console.log('Pani er opor name jibon');
// }
// else{
//     console.log('Somudre pani ache khaite pari na');
// }
if(drink.trim()===liquid.trim()){
    console.log('Pani er opor name jibon');
}
else{
    console.log('Somudre pani khaite pari na');
}

/**
 * Trim use kore amra -->space ek hoay jai infact space 
 * remove hoi trim use korle
 */