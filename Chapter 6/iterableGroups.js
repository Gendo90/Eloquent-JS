// class "Group" that performs like JS's "Set" class
class Group {
    constructor() {
        this.values = [];
    }

    //adds value 'val' to the Group if it is not already present
    add(val) {
        if(!this.has(val)) {
            this.values.push(val);
        }
    }

    //removes value 'val' to the Group if it is already present
    delete(val) {
        let ind = this.values.indexOf(val)
        if(this.has(val)) {
            this.values.splice(ind, 1);
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

class groupIterator {
    constructor(group) {
        this.ind = 0;
        this.group = group;
    }

    //returns values in the group until "done" is true
    next() {
        if(this.ind===this.group.values.length) {
            return {value: undefined, done: true}
        }
        else {
            let val = this.group.values[this.ind];
            this.ind++;
            return {value: val, done: false}
        }
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new groupIterator(this);
}


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
