function chessboard(size) {
    let space = " ";
    let pound = "#";
    let mainLine = "";
    let altLine = "";
    let output = "";
    for (let i = 0; i<size; i++) {
        if(i%2==0) {
            mainLine+=space;
            altLine+=pound;
        }
        else {
            mainLine+=pound;
            altLine+=space;
        }
    }
    for (let i = 0; i<size; i++) {
        if(i%2==0) {
            output+=mainLine+"\n";
        }
        else if(i==size-1) {
            output+=altLine;
        }
        else {
            output+=altLine+"\n";
        }
    }
    return output
}

console.log("Print a 2x2 board: ")
console.log(chessboard(2))
console.log("Print a regular chessboard (8x8): ")
console.log(chessboard(8))
