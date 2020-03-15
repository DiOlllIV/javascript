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
    const first = JSON.stringify(obj1);
    const second = JSON.stringify(obj2);
    return first === second;
};


/* compareObjects(obj1, obj2);
compareObjects(obj2, obj3); 
compareObjects(obj1, obj4); */