const m = 2;
const n = 10;
let i = m;
let sum = 0;
let result;

for (i = 0; i <= n; i++) {
    sum += i;
    if (i % 2 == 0 && i % 4 == 1) {
        sum += 2;
        continue;

    }
    if (i / 3 == 0) {
        sum -= 3;
        continue;

    }
    if (i / 4 == 0) {
        sum *= 4;
        continue;
    }


    if (i % 5 == 0) {
        console.log(i);
        continue;
    }
    result = sum;

}