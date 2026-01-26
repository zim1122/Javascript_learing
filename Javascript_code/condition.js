// let result=4.500;
// if(result==5.00){
//     console.log("Baba computer kine dibe");
// }
// else if(result>=4.5){
//     console.log("Baba laptop kine dibe")
// }
// else if(result>=4.00){
//     console.log("Baba tab kine dibe");
// }
// else if(result>=3.5){
//     console.log("Baba mobile kine dibe");
// }
// else{
//     console.log("Baba computer kine dibe na");
// }

let balance=1000;
let withdrawAmount=1600;
if(withdrawAmount<=balance){
    if(withdrawAmount%500==0){
        console.log("Withdraw Succesful");
    }
    else{
        console.log("Enter a Multiple amount of 500");
    }
}
else{
    console.log("Insufficient Balance");
}
//ternary operator
let isMatured=true;
let isInsterested=true;
let 