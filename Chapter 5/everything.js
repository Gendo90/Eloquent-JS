// makes a higher-order "everything" function that returns "true" if ALL
// elements of the array are true, false otherwise
// This version uses not(!) "some" of the opposite of the predicate
// to find the result
function everything(arr, test) {
    if(arr.some((element) => !test(element))) {
        return false;
    }
    return true;
}

// makes a higher-order "everything" function that returns "true" if ALL
// elements of the array are true, false otherwise
// This version uses a loop and checks each element of "arr" to find the
// result
function everythingLoop(arr, test) {
    for (let element of arr) {
        if(!test(element)) {
            return false;
        }
    }
    return true;
}


//basic tests
arr1 = [1, 2, 5, 7];
arr2 = [1, 2, 5, 7];
arr3 = [10, 3, 6, 1];
arr4 = arr1.concat(arr3)

let test1 = everything(arr4, a => a<10)
let test2 = everything(arr4, a => a<11)
let test3 = everything(arr4, a => a>0)
let test4 = everything(arr4, a => a>1)
console.log(test1, test2, test3, test4)

test1 = everythingLoop(arr4, a => a<10)
test2 = everythingLoop(arr4, a => a<11)
test3 = everythingLoop(arr4, a => a>0)
test4 = everythingLoop(arr4, a => a>1)
console.log(test1, test2, test3, test4)
