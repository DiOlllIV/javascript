let user = {
    lastName: 'Doe',
    firstName: 'John',
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    },
};

/* user.getFullName(); */

export { user };