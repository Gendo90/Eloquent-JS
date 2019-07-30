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


let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
