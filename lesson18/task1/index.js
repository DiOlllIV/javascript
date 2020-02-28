const event = {
    message: 'Welcome to the party!',
    guests: [
        { name: 'Tom', age: 16, email: 'tom@gmail.com' },
        { name: 'James', age: 34, email: 'james@gmail.com' },
        { name: 'Jason', age: 28, email: 'jason@gmail.com' },
        { name: 'Stas', age: 18, email: 'stas@gmail.com' },
    ],

    getInvitations() {
        return this.guests
            .filter(({ age }) => age >= 18)
            .map(({ name, email }) =>
                ({
                    email,
                    message: `Dear ${name}! ${this.message}`
                }));
    },
};

console.log(event.getInvitations());

export { event };