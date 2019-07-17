// function that counts the number of times parameter "char" (a letter)
// appears in parameter "a" (a string)
function countBs(a, char) {
    function countChar(char) {
        let count = 0;
        for (let i=0; i<a.length; i++) {
            if(a[i]===char) {
                count++;
            }
        }
        return count;
    }
    return countChar(char);
}

console.log(countBs("BBBaby!", "B"));
