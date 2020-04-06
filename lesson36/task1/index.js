export const fetchUser = async userId => {
    const response = await fetch(`https://api.github.com/users/${userId}`);

    try {
        if (!response.ok)
            return null;

        const userData = await response.json();
        return userData;
    } catch (error) {
        throw new Error(error);
    }
};