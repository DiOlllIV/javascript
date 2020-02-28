const event = {
    quests: [
        { name: 'Tom', email: 'tom@gmail.com', age: 16 },
        { name: 'James', email: 'james@gmail.com', age: 34 },
        { name: 'Jason', email: 'jason@gmail.com', age: 28 },
        { name: 'Stas', email: 'stas@gmail.com', age: 18 },
    ],
    message: 'Welcome to the party!',

    getInvitations() {
        return this.quests
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