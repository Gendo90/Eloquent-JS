// makes a linked list from an input array parameter
function arrayToList(arr) {
    let output = {};
    for (let i=0; i<arr.length; i++) {
        if(i===0) {
            output = {
                value: arr[i],
                rest: null
            }
        }
        else {
            final = output
            while (final.rest!==null) {
                final = final.rest
            }
            final.rest = {
                value: arr[i],
                rest: null
            }
        }
    }
    return output;
}

// returns an array based on the input linked list
function listToArray(list) {
    let listCheck = list;
    arr = []
    while (listCheck!==null) {
        arr.push(listCheck.value);
        listCheck = listCheck.rest;
    }
    return arr;
}

// creates a new linked list with the new element being the first entry into the
// list and the input list constituting the rest of the new list after that
function prepend(element, list) {
    output = {
        value: element,
        rest: list
    }
    return output;
}

// returns the "index" of an element in parameter list, or "undefined" if the
// value is not in the list
function nth(element, list) {
    let i=0;
    let checkList = list;
    while(checkList!==null && checkList.value!==element) {
        checkList = checkList.rest
        i++;
    }
    if(checkList===null) {
        return undefined;
    }
    else {
        return i;
    }
}

// returns the "index" of an element in parameter list, or "undefined" if the
// value is not in the list - uses recursion!
function nthRecursive(element, list) {
    if(list.value===element) {
        return 0;
    }
    else if(list.rest!==null) {
        // was getting NaN as the result before adding the following "if"
        // statement, and the problem wants an "undefined" result instead!
        if(nthRecursive(element, list.rest)!==undefined) {
            return 1+nthRecursive(element, list.rest);
        }
    }
    return undefined
}

//basic tests
arr1 = [1, 2, 5, 7];
arr2 = [2]
arr3 = [1, 3, 6, 10];

// let t0 = Date.now();
console.log(arrayToList(arr1), arr1);
console.log(arrayToList(arr2), arr2);

let n = arrayToList(arr1);
console.log(listToArray(n));
let l = prepend(4, n);
console.log(l);

//test nth function
console.log(nth(7, l));
console.log(nth(7, n));
console.log(nth(3, n));

//test nthRecursive function
console.log(nthRecursive(7, l));
console.log(nthRecursive(7, n));
console.log(nthRecursive(3, n));
