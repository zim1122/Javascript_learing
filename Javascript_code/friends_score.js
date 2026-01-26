// let score=60;
// if(score>=80){
//     if(score>=80) console.log("Go for launch");
//     else if(score<=80 && score>=60) console.log("Better luck next time");
//     else if(score<60 && score>=40) console.log("Keep friends message unseen");
//     else console.log("Block Your friend");
// }
// else{
//     console.log("Go to home and sleep and act sad");
// }

let score=81;
let friendScore=90;
if(score>80){
    if(friendScore>80) console.log("Go for a lunch");
    else if(friendScore<80 && friendScore>=60){
        console.log("Good luck Next time");
    }
    else if(friendScore<60 && friendScore>=40){
        console.log("Keep message unseen");
    }
    else if(friendScore<40){
        console.log("Block Your Friend");
    }
}
else{
    console.log("Go to home and act as sleep");
}