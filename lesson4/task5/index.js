const m = 2;
const n = 10;
let i = m;
let sum = 0;
let result;

for (i = 0; i <= n; i++) {

    if (i % 2 == 0 && i % 4 == 1) {

        continue;

    }
    sum += 2;
    if (i / 3 == 0) {

        continue;

    }
    sum -= 3;
    if (i / 4 == 0) {

        continue;
    }
    sum *= 4;

    if (i % 5 == 0) {
        console.log(i);
    }
    result = sum;

}