const fibonacci = value => {
    let firstN = 1;
    let biggerN = 1;

    for (let i = 3; i <= value; i++) {
        let secondN = firstN + biggerN;
        firstN = biggerN;
        biggerN = secondN;
    }
    return biggerN;
};

export const maxFibonacci = num => {
    let id = 0;
    let max = 0;
    while (true) {
        if (fibonacci(id) <= num) {
            max = fibonacci(id);
            id++;
        } else return max;
    }
};