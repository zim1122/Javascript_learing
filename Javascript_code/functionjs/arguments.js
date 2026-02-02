function doubleit (number){
    const doubled =number*2;
    console.log(number,doubled);
}

console.log('I will call the function');
doubleit(15);
console.log('--------------------------');
doubleit(88);
console.log('-----------------------------');
doubleit(873);

console.log('---------------------------');
const money=112;
doubleit(money);

console.log('---------------------------------------------')

function difference(num1,num2){
    const diff = num1-num2;
    console.log(num1,num2,'difference is',diff);
}

const fatherAge=40;
const myAge=10;
difference(fatherAge,myAge);