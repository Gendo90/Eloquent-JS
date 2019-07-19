// returns a copy of the array that has been reversed
function reverseArray(arr) {
    let arrStack = arr.slice();
    let cycles = arrStack.length
    let output = [];
    for (let i=0; i<cycles; i++) {
        output.push(arrStack.pop());
    }
    return output;
}

// reverses an array that is input as a parameter
function reverseArrayInPlace(arr) {
    let cycles = arr.length
    for (let i=0; i<cycles; i++) {
        //takes the last element off the array
        //and inserts it at its new, "reversed" location
        arr.splice(i, 0, arr.pop());
    }
    return arr;
}

//basic tests
arr1 = [1, 2, 5, 7];
arr2 = [1, 3, 6, 10];

let t0 = Date.now();
console.log(reverseArray(arr1), arr1);
let t1 = Date.now();
console.log(reverseArrayInPlace(arr2), arr2);
let t2 = Date.now();

console.log(`reverseArray time is: ${t1-t0}`);
console.log(`reverseArrayInPlace time is: ${t2-t1}`);
