//timer test with alert function
const timer = require('./Timer_Module')

let cancelVal = timer.time_func(5000, 3000, 500, ()=>{console.log('abc')});

// setTimeout(()=>console.log(cancelVal), 2000)

//code below clears the interval as soon as it is set, so nothing appears
// cancelVal[1].then(result=>clearInterval(result))

//line below is sample code to cancel the interval once it has started
setTimeout(()=>cancelVal[1].then(result=>clearInterval(result)), 6000)

//below line will cancel the function before it starts
// clearTimeout(cancelVal)


//need to look at getting it to work in the browser - using a require.js
//plugin?
