let score = 80;

function doStuff (value) {
    value = 90;
    return value;
}

doStuff(score);
let newScore = doStuff(score);

console.log(score);
console.log(newScore);