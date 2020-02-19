function getSum(arr) {
    let sumOfNumbers = 0;

    if (!Array.isArray(arr)) {
        return null;
    }

    for (let sum of arr) {
        sumOfNumbers += sum;
    }
    return sumOfNumbers;
}

const sumOfNumbers = getSum(arr);