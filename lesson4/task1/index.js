let a = 1;
const n = 140;
let sum = 0;
let result = 1;

while (a < n) {
    result += a;
    a++;
    sum = result;
}



console.log('Result: ' + sum);