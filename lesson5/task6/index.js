let i = 1;
let j = 1;

function isPrimes(n) {

    for (i; i <= n; i++) {

        if (i % n === 0)
            return false;
        else return true;
    }

}
isPrimes(11);

function getPrimes(n) {

    for (j; j <= n; j++) {

        if (isPrimes(j)) {

            console.log(j);
        }
    }
}
getPrimes(11);