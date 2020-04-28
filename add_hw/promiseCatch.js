const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1';


async function getUserData(userId) {
    /* return fetch(`${baseUrl}/users/${userId}`).then(response => {
        if (!response.ok) {
            throw new Error('Can not find a user');
        }
        return response.json();
    }); */

    const response = await fetch(`${baseUrl}/users/${userId}`);
    console.log(response);
    if(!response.ok)
        throw new Error('Can not find a user');
    
    const userData = await response.json();
    return userData;
};

getUserData('5')
        .then(userData => {
            console.log(userData);
        })
        .catch(error => {
            console.log(error.message);
        });


/* export function printUserData(userId) {
    getUserData(userId)
        .then(userData => {
            console.log(userData);
        })
        .catch(error => {
            console.log(error.message);
        });
}

getUserData('5'); */