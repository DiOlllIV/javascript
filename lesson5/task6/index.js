let i = 2;
let j = 1;

function isPrimes(n) {
    for (i; i <= n; i++)
        if (n % i === 0)
            return false;
    return true;
}


function getPrimes(n) {

    for (j; j <= n; j++) {

        if (isPrimes(j)) {

            console.log(j);
        }
    }
}
getPrimes(5);