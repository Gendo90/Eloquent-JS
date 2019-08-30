function Promise_all(promises) {
  return new Promise((resolve, reject) => {
    let output_arr = [];
    let reject_arr = []
    let promise_chain = new Promise(function(resolve) {
            resolve(true);
        });
    for (let item of promises) {
        promise_chain = promise_chain.then(()=>item)
        .catch(result=>{
            // console.log(result)
            return Promise.reject(result)
        })
        .then(result=>{
            // console.log(result);
            output_arr.push(result)
            return output_arr})
    }
    let output = promise_chain.then(() => output_arr)
    resolve(output)

});
}


// Test code.
Promise_all([]).then(array => {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(resolve => {
    setTimeout(() => resolve(val), Math.random() * 500);
  });
}
Promise_all([soon(1), soon(2), soon(3)]).then(array => {
  console.log("This should be [1, 2, 3]:", array);
});
Promise_all([soon(1), Promise.reject("X"), soon(3)])
  .then(array => {
    console.log("We should not get here");
  })
  .catch(error => {
    if (error != "X") {
      console.log("Unexpected failure:", error);
    }
  });
