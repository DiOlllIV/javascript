let i = 1;

function isPrimes(n) {

    for (i; i <= n; i++) {
        if (i % n === 0)
            return false;
        else return true;
    }

}

function getPrimes(n) {
    while (1 >= n) {
        if (isPrimes(n)) {
            n--;
            console.log(n);
        }
    }
}

getPrimes(11);