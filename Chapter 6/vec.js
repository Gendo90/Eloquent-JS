// class "Vec" that represents a 2D vector
class Vec {
    constructor(x, y) {
        this.x = x,
        this.y = y
    }

    //adds an input vector to this vector and returns the resulting new vector
    plus(vector) {
        let newX = this.x+vector.x;
        let newY = this.y+vector.y;
        return new Vec(newX, newY)
    }

    //subtracts an input vector from this vector and returns the resulting new vector
    minus(vector) {
        let newX = this.x-vector.x;
        let newY = this.y-vector.y;
        return new Vec(newX, newY)
    }

    get length() {
        let dist = Math.sqrt((this.x*this.x)+(this.y*this.y))
        return dist;
    }
}


console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5
