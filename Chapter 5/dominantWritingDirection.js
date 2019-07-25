require('./scripts.js')

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
    })) {
      return script;
    }
  }
  return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

// checks each character of the input string "a" to find the script and then
// determine the writing direction for that character, and then returns the
// dominant writing direction (direction in which the largest amount of
// characters are written)
function dominantDirection(text) {
    //this first "variable" gives an array of objects with "name" and "count"
    // properties, with the "name" corresponding to the text direction and
    // "count" representing the number of characters in string in that
    // direction
    let directions = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({name}) => name!=="none");

    return directions.reduce((a, b) => {
        if(a.count>b.count) {
            return a;
        }
        else {
            return b;
        }
    }).name;
}

console.log(dominantDirection("Hello!"));
console.log(dominantDirection("Hey, مساء الخير"));
