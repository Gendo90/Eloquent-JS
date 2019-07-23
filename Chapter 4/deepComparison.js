// checks if the values are the same, or if they are equivalent objects
function deepEqual(val1, val2) {
    //direct comparison of values (for non-object inputs)
    if(val1===val2) {
        return true;
    }
    //check if objects are being compared!
    else if(typeof val1 === "object" && typeof val2 === "object" &&
            !(val1===null || val2===null)) {
                let a = Object.keys(val1);
                let b = Object.keys(val2);
                // check to see if the objects have the same number of keys!
                if(a.length!==b.length) {
                    return false;
                }
                // loop over property names
                for (let i=0; i<a.length; i++) {
                    // check that all property names are the same
                    if(a[i]!==b[i]) {
                        return false;
                    }
                    // check that each property value is the same!
                    if(!deepEqual(val1[a[i]], val2[b[i]])) {
                        return false;
                    }
                }
                return true;
            }
    else {
        return false;
    }
}

//basic tests
arr1 = [1, 2, 5, 7];
arr2 = [1, 2, 5, 7];
arr3 = [1, 3, 6, 10];

console.log(arr1===arr2)
console.log(deepEqual(arr1, arr2))

obj1 = {
    name: "ABCD",
    age: 11,
    date: "today",
    arr: [8, 6, 7]
}
obj2 = {
    name: "ABCD",
    age: 11,
    date: "today",
    arr: [8, 6, 7]
}

console.log(obj1===obj2)
console.log(deepEqual(obj1, obj2))
