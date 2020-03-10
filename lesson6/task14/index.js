function checker(arr) {
    let minNum = arr[0];
    let maxNum = arr[0];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < minNum)
            minNum = arr[i];

        if (arr[i] > maxNum)
            maxNum = arr[i];
    }

    return minNum + maxNum > 1000;

}
/* 
console.log(checker([5, 7, 88, 10, 4, 3, 6])) */