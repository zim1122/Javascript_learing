/**
 * create a function that will only return the even numbers
 * or the sum of even numbers
 * 
 */

function evenNumbersOnly(numbers){
    const evens= [];
    for(const number of numbers){
        if(number%2==0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

// const numbers=[5,8,91,24,6];
// const evens=evenNumbersOnly(numbers);
// console.log('even numbers are',evens);

function sumOfEvenNumbers(numbers){
    let sum=0;
    for(const nuber of numbers){
        if(number%2===0){
            console.log(number);
            sum+=number;
        }
    }
    return sum;
}

const numbers = [5,8,91,24,6];
const sum1=sumOfEvenNumbers(numbers);
console.log('The sum is',sum1);
