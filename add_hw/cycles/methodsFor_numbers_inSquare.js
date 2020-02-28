const arr = [1, 2, 3, 4, 5];

let forEachArr = [];
arr.forEach(num => forEachArr.push(num * num));


let forOfArray = [];
for (let num of arr) {
    forOfArray.push(num * num);
}

let forInArray = [];
//Bad choise for array
for (let num in arr) {
    forInArray.push(num * num);
}

let forArr = [];
for (let i = 0; i < arr.length; i++) {
    forArr.push(arr[i] * arr[i]);
}

arr.map(num => num * num);