export const getUsersBlog = async usersArr => {
    try {
        const response = await usersArr.map(userId =>
            fetch(`https://api.github.com/users/${userId}`)
            .then(response => {
                if (response.ok)
                    return response.json();

                throw new Error('Failed to fetch users blog');
            })
            .then(users => users.blog));
        const usersData = await Promise.all(response);

        return usersData;
    } catch (error) {
        throw new Error(error);
    }
};