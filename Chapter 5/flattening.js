// makes a "flattened" array containing the values of an array of arrays
// that is input as a parameter
function flattening(arr) {
    let output = arr.reduce((a, b) => a.concat(b));
    return output;
}


//basic tests
arr1 = [1, 2, 5, 7];
arr2 = [1, 2, 5, 7];
arr3 = [1, 3, 6, 10];
arr4 = [arr1, arr2, arr3]

console.log(flattening(arr4))
