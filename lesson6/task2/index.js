function getSum(arr) {
    let sumOfNumbers = 0;

    if (!Array.isArray(arr)) {
        return null;
    }

    for (let i; i < arr.length; i++) {
        sumOfNumbers += arr[i];
    }
    return sumOfNumbers;
}

const sumOfNumbers = getSum(arr);