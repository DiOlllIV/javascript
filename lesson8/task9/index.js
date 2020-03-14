/* const obj1 = {
    name: 'Tom',
    age: 17,
};

const obj2 = {
    name: 'Bob',
    age: 17,
};

const obj3 = {
    name: 'Bob',
    age: 17,
    student: false,
};

const obj4 = {
    name: 'Tom',
    age: 17,
}; */

const compareObjects = (obj1, obj2) => {

    const arr1 = Object.values(obj1);
    const arr2 = Object.values(obj2);

    for (let elem1 of arr1) {
        console.log(elem1);
        for (let elem2 of arr2) {
            console.log(elem2);
            return (arr1.length === arr2.length && elem1 === elem2) ?
                true : false;
        }

    }

};


/* compareObjects(obj1, obj2);
compareObjects(obj2, obj3);
compareObjects(obj1, obj4); */