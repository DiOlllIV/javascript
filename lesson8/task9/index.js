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

    for (let key1 in obj1) {

        for (let key2 in obj2) {

            return (key1 === key2 && obj1[key1] === obj2[key2]) ?
                true : false;
        }

    }

};


/* compareObjects(obj1, obj2);
compareObjects(obj2, obj3);
compareObjects(obj1, obj4); */