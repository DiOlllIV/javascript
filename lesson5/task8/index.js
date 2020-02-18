function sum(from, to) {
    let res = 0;

    if (from < to) {
        for (i = from; i <= to; i++) {
            res += i;
        }
    } else
        for (i = from; i >= to; i--) {
            res += i;
        }

    return res;
}

function compareSums(a, b, c, d) {
    let res1 = sum(a, b);
    let res2 = sum(c, d);

    if (res1 > res2)
        return true;
    else
        return false;
}

compareSums(5, 2, 3, 1);