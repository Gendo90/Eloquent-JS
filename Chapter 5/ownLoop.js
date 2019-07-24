// makes a higher-order "loop" function that takes a value, test function,
// body function, and update function and runs the update function for the
// "value" amount of times unless the test function is false, in which case
// it exits - should function effectively like a for loop
function loop(val, test, update, body) {
    let current = body(val)
    while(test(val)) {
        current = body(val, current);
        val = update(val);
    }
    return current;
}


//basic tests
arr1 = [1, 2, 5, 7];
arr2 = [1, 2, 5, 7];
arr3 = [10, 3, 6, 1];
arr4 = arr1.concat(arr3)

let max = loop(0, (a) => a<arr4.length, (a) => a+1, function(a, b=-Infinity) {
    let testmax = arr4[a];
    return testmax>b ? testmax : b;
})

console.log(max)
console.log(arr4)
