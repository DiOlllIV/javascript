function isPrimes(n) {
    for (let i = 2; i < n; i++)
        if (n % i === 0)
            return false;
    return true;
}


function getPrimes(n) {
    for (let j = 2; j <= n; j++) {

        if (isPrimes(j)) {
            console.log(j);
        }
    }
}