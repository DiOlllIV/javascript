const getAdults = users =>
    Object.entries(users)
    .filter(user => (user[1] >= 18))
    .map(user => user[0]);