/* let arr = [3, 4, 5, 6, 7, 0, 1, 2];
 */
function cloneArr(arr) {
    let arrClone = [];
    for (let i = 0; i < arr.length; ++i) {
        arrClone.push(arr[i]);
    }
    return arrClone;
}

/* const arrClone = cloneArr(arr);

console.log(arrClone);
console.log(arr); */