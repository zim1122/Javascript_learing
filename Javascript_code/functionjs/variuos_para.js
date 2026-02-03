function evenSize(str){
    const size= str.length;
    console.log(str,size);
    if(size%2===0){
        console.log('even size')
        return true;
    }
    else{
        console.log('Odd size');
        return false;
    }
}

// evenSize('Dhaka');
// evenSize('faka');

