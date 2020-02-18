let i = 1;
let j = 1;

function isPrimes(n) {
    for (i = 2; i <= n; i++) {
        if (n % i === 0)
            return false;
        else
            return true;
    }
    console.log(i);
}


function getPrimes(n) {

    for (j; j <= n; j++) {

        if (isPrimes(j)) {

            console.log(j);
        }
    }
}
getPrimes(11);