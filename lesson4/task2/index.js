const m = 2;
const n = 12;
let i;
let result = 1;

for (i = m; i <= n; i++) {
    if (i % 2 === 1) {
        result *= i;
    }
}