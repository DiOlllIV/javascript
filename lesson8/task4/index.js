const getAdults = users => {
    let adults = {};

    for (key in users) {
        if (users[key] >= 18) {

            adults[key] = users[key];
        }
    }

    return adults;
};

const users = {
    'Joe': 19,
    'Tom': 17,
    'Bob': 18,
}

/* console.log(getAdults(users));
console.log(users); */