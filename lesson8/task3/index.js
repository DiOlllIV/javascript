export const pickProps = (obj, arr) => {

    let object = {};

    for (let key in obj) {
        for (let elm of arr) {
            if (elm === key)
                arr.forEach(elm => {
                    object[elm] = obj[elm];
                });
        }
    }

    return object;
};

/* const arr = ['a', 'b'];
const obj = { a: 1, b: 2, c: 3 };
console.log(pickProps(obj, arr)); */