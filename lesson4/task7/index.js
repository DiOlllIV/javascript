let i = 0;
let j = 0;
let m = 1e7;
let sum = 0;

for (i = 0; i <= m; i++) {
    for (j = 1; j <= i; j++) {
        sum = j + i;
        console.log(sum);
    }
}