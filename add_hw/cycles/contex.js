const user = {
    firstName: 'Tom',
    lastName: 'Ford',
    getFullName: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    },
    setFullName(fullName) {
        const [firstName, lastName] = fullName;

        this.firstName = firstName;
        this.lastName = lastName;
    },
};