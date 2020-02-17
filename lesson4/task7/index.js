/* let i = 1;
let j = 0;
let sum = 0;
let m = 1e7;
for (i = 1; i <= 1; i++) {
    for (j; j <= m; j++) {
        sum = (j + i) * (j - i + 1) / 2;
        console.log(sum);
    }
} */

let n = 1e7;
let sum = 0;
do {
    sum += n;
    n -= 1;
} while (n >= 0);

console.log(sum);