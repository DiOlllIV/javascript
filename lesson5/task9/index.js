function findDivCount(a, b, n) {
    let quant = 0;
    for (i = a; i <= b; i++) {
        if (i % n === 0) {
            /* console.log(i); */
            quant++;
        }
    }
    return quant;
}