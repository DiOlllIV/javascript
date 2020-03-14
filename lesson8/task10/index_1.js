export const pickProps = (obj, arr) => {

    let obj = {};

    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];

        obj[key] = obj[key];
    }

    return obj;
};

/* const arr = ['a', 'b'];
const obj = { a: 1, b: 2, c: 3 };
console.log(pickProps(obj, arr)); */