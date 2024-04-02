// 99 bottle of beer
let num = 99;
function beer(num) {
    while (num >= 1) {
        console.log(num + " bottles of the beer on the wall, " + num + " bottles of beer.\nTake one down and pass it around, " + (num -1) + " bottles of beer on the wall.\n");
        num--;
    }
   console.log("No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.");
}


beer(num);