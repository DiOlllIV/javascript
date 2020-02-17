const m = 2;
const n = 20;
let i = m;
let result = 0;

for (i = 0; i <= n; i++) {
    if (i == 2 && i !== 4) {
        result += 2;
    } else if (i == 3) {
        result -= 3;
    } else if (i == 4) {
        result *= 4;
    } else if (i == 5) {
        console.log(i)
    }
    result = i;
}