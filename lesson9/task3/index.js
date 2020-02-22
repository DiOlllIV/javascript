const getCustomersList = sortUsers =>
    Object.entries(sortUsers)
    .map(elem => ({...sortUsers[elem[0]], id: elem[0] }))
    .sort((a, b) => (a.age - b.age));


/* const customers = {
    'customer-id-1': {
        name: 'William',
        age: 54,
    },
    'customer-id-2': {
        name: 'Tom',
        age: 34,
    },
    'customer-id-3': {
        name: 'Bob',
        age: 24,
    }
}

console.log(getCustomersList(customers)); */