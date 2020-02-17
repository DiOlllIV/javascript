const m = 2;
const n = 5;
let i = m;
let result = 0;

for (i = 0; i <= n; i++) {

    if (i % 2 == 0) {
        result += 2;

    }
    if (i / 3 == 0) {
        result -= 3;

    }
    if (i / 4 == 0) {
        result *= 4;

    }
    if (i % 5 == 0) {
        console.log(i);
    }


}