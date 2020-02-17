const m = 2;
const n = 15;
let i = m;
let result = 0;

for (i = m; i <= n; i++) {
    if (i % 2 === 0 && i % 4 === 1) {
        result += i;
    } else if (i % 3 === 0) {
        result -= i;
    } else if (i % 4 === 0) {
        result *= i;

    }

    if (i % 5 == 0) {
        console.log(i);
    }
}