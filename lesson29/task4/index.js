export const requestUserData = (userId, callback) => {
    const interval = (Math.random() * (3 - 1) + 1) * 1000;
    setTimeout(() => {

        if (userId === 'broken') {
            callback(null, 'Failed to load user data');
            return;
        }

        callback({
            name: 'John',
            age: 17,
            userId,
            email: `${userId}@example.com`,
        })
    }, interval);
};