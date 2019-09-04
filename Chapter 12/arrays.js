let egg = require('./12_language')

// Modify these definitions...

egg.topScope.array = (...args) => {
    let output_arr = [];
    for (let arg of args) {
        output_arr.push(arg);
    }
    return output_arr;
};

egg.topScope.length = (arr) => {return arr.length};

egg.topScope.element = (arr, n) => {return arr[n]};

egg.run(`
do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);
// → 6
