// function that checks if an integer is even or not
function isEven(num) {
    if(num===0) {
        return true;
    }
    else if(num===1) {
        return false;
    }

    if(num>0) {
        return isEven(num-2)
    }
    else {
        return isEven(num+2)
    }
}

console.log(isEven(50));
console.log(isEven(75));

// modified original function to work for negative numbers
console.log(isEven(-1));
console.log(isEven(-2));
