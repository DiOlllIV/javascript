function getSum(a, b) {
    let sum = 0;
    let i;
    for (i = a; i <= b; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    return sum;
}
getSum(2, 7);