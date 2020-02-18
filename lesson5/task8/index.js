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

    if (sum(c, d) > sum(a, b))
        return true;
    else
        return false;
}