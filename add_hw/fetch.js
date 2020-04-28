const baseUrl = 'https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/users';

/* createUser(user)
    .then(response => response.json())
    .then(data => console.log(typeof data))
 */
function updateUser(userId, newUserData) {
    const pr = fetch(`${baseUrl}/${userId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(newUserData)
    });
    return pr;
}

updateUser('3', {email: 'a@a.com'})
    .then(result => console.log(result));