const getAdults = users => {
    let object = {};

    for (key in users) {
        if (users[key] >= 18) {

            object[key] = users[key];
        }
    }

    return object;
};

const users = {
    'Joe': 19,
    'Tom': 17,
    'Bob': 18,
}

/* console.log(getAdults(users));
console.log(users);  */