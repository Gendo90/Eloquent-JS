class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  let not_finished = true;
  while(not_finished) {
      try {
          let result = primitiveMultiply(a, b);
          return result;
      }
      catch(e) {
          if(!(e instanceof MultiplicatorUnitFailure)) {
              throw e;
          }
          else {
              console.log("Multipy did not work this time! Trying again!")
          }
      }
  }
}


console.log(reliableMultiply(8, 8));
