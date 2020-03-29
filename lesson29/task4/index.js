export const requestUserData = (userId, callback) => {
    const interval = (Math.random() * (3 - 1)) + 1;
    setTimeout(() => {

        if (userId === 'broken') {
            callback(null, 'Failed to load user data');
            return;
        }
        if (userId === 'userId777') {
            callback({
                name: 'John',
                age: 17,
                userId: 'userId777',
                email: 'userId777@example.com'
            })
        }
    }, interval);
};