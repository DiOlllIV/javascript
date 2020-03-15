/* const keys = ['name', 'addres', 'age'];
const values = ['Bob', 'Ukraine', 34]; */

const buildObject = (keysList, valuesList) => {

    const arr = [];

    for (let i = 0; i < keysList.length; i++) {
        arr.push([keysList[i], valuesList[i]]);

    }

    const map = new Map(arr);
    const obj = Object.fromEntries(map);

    console.log(obj);
};


/* buildObject(keys, values); */