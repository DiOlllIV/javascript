const m = 2;
const n = 10;
let i = m;
let sum = 0;
let result = 0;

for (i = 0; i <= n; i++) {
    result = i;
    if (i == 2 && i != 4) {
        sum += i;
        continue;
    } else if (i == 3) {
        sum -= 3;
        continue;
    } else if (i == 4) {
        sum *= 4;
        continue;
    } else if (i % 5 == 0) {
        console.log(i)
    }

    result = sum;
}