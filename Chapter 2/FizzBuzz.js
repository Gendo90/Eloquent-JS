f = "Fizz";
b = "Buzz";

for (let i = 1; i<101; i++) {
    if(i%3==0 && i%5==0) {
        console.log(f+b)
    }
    else if(i%3==0) {
        console.log(f)
    }
    else if(i%5==0) {
        console.log(b)
    }
    else {
        console.log(i)
    }
}
