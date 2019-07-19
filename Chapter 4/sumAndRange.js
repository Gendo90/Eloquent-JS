// function returns an array starting at the "start" parameter, including
// the "end" parameter, and having a step size of "step"
function range(start, end, step=1) {
    let output_arr = [];
    if(step>0) {
        let total_range = end-start+1;
        for (let i=0; i<total_range; i+=step) {
            output_arr.push(start+i);
        }
    }
    else if(step<0) {
        for (let i=start; i>=end; i+=step) {
            output_arr.push(i);
        }
    }

    return output_arr;
}


// function that takes an array of numbers as input and returns the sum
// of those numbers
function sum(arr) {
    total = 0;
    for (let item of arr) {
        total+=item;
    }
    return total;
}

// main tests...
console.log(range(1, 10));
console.log(sum(range(1, 10)));


// bonus points!
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
console.log(range(5, 5));
console.log(range(5, 2, 0));
