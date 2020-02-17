let i;
let sum = 0;
let res = 0;

for (i = 1; i <= 1000; i++) {
    sum += i;
}

res = sum;
sum %= 1234;
res -= sum;

const result = res > sum ? true : false;