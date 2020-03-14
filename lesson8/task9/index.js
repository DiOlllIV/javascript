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

    const length1 = Object.keys(obj1).length;
    const length2 = Object.keys(obj2).length;

    for (let elem1 in obj1) {

        for (let elem2 in obj2) {

            return (obj1[elem1] === obj2[elem2] &&
                    elem1 === elem2 &&
                    length1 === length2) ?
                true : false;
        }
    }
};


/* compareObjects(obj1, obj2);
compareObjects(obj2, obj3); 
compareObjects(obj1, obj4); */