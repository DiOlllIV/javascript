let user = {
    lastName: 'Doe',
    firstName: 'John',
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
};

user.getFullName();

export { user };