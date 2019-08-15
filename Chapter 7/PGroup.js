// class "Group" that performs like JS's "Set" class
class PGroup {
    static get empty() {
        return new PGroup([]);
    }

    constructor(arr) {
        this.values = arr;
    }

    //adds value 'val' to the Group if it is not already present
    add(val) {
        if(!this.has(val)) {
            let newValues = [];
            for (let item of this.values) {
                newValues.push(item)
            }
            newValues.push(val)
            return new PGroup(newValues);
        }
    }

    //removes value 'val' to the Group if it is already present
    delete(val) {
        if(this.has(val)) {
            let newValues = [];
            for (let item of this.values) {
                if(item!==val) {
                    newValues.push(item)
                }
            }
            return new PGroup(newValues);
        }
    }

    //returns true if value 'val' is in the group, false otherwise
    has(val) {
        if(this.values.indexOf(val)!==-1) {
            return true;
        }
        else {
            return false;
        }
    }

    //takes an iterable as an argument and creates a group using all values
    //found in the iterable
    static from(iter) {
        let outputGroup = new Group();
        let thisIter = iter[Symbol.iterator]();
        let currentVal = thisIter.next();

        //loops over the iterable until done is true
        while(!currentVal.done) {
            if(!outputGroup.has(currentVal.value)) {
                outputGroup.add(currentVal.value);
            }
            currentVal = thisIter.next();
        }

        //returns the new Group with the iterable's values, non-repeating!
        return outputGroup;
    }
}
// let n = new PGroup([1, 2, 3])
// console.log(n)
console.log(PGroup.empty)

let a = PGroup.empty.add("a");
// console.log("the first PGROUP", a)
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false
