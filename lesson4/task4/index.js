let i = 0;
let str = '';
const n = 20;
let sum = 1;

do {
    i += 1;
    str += i;
    sum = str;
} while (i < n);
console.log(sum);