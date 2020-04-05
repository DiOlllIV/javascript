//https://api.github.com/users/USERNAME
//fetch and render user data
export const fetchUserData = userName =>
    fetch(`https://api.github.com/users/${userName}`)
    .then(response => {
        if (response.ok)
            return response.json();
        throw new Error('Failed to load');
    });

export const fetchRepositories = url =>
    fetch(url)
    .then(response => {
        if (response.ok)
            return response.json();
        throw new Error('Failed to load');
    });