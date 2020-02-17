let i = 1;
let j = 0;
let m = 1e7;
let sum = 0;

for (i; i <= 1; i++) {
    for (j = i; j <= m; j++) {
        sum = (j + i) * (j - i + 1) / 2;
        console.log(sum);
    }
}