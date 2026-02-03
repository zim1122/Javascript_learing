/**
 * Objective:Write a function to give the sum of all number in an array
 * Step 1:Declare a function.
 * step-2:call check whether the function is called properly
 * step-3:set a parameter
 * step-4:pass the parameter
 * 
 */

function sumofNumbers(numbers){
    // console.log(numbers);
    let sum=0;
    for(const number of numbers){
        console.log(number);
        sum+=number;
    }
    return sum;

}
const nums=[54,62,12,6]
const sum= sumofNumbers(nums);
console.log('Sum of numbers is',sum);