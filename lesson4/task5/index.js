const m = 2;
const n = 20;
let i = m;
let sum = 0
let result = 0;

for (i = 0; i <= n; i++) {
    sum = i;
    if (i == 2 && i != 4) {
        i += 2;
    }
    sum += i;
    if (i == 3) {
        i -= 3;
    }
    sum += i;
    if (i == 4) {
        i *= 4;
    }
    sum += i;
    if (i % 5 == 0) {
        console.log(i)
        continue;
    }
    result = sum;
}