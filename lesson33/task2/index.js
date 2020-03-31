    const checkEmail = (arr, data) =>
        arr.find(obj =>
            obj.email === data);

    const countCommits = arr =>
        arr.reduce((acc, cur) => {
            const confirm = checkEmail(acc, cur.commit.author.email);
            if (confirm === undefined) {
                const obj = {
                    count: 1,
                    name: cur.commit.author.name,
                    email: cur.commit.author.email
                };
                acc.push(obj);
            } else confirm.count++;

            return acc;
        }, [{}]);

    const filterActiviti = arr => {
        arr.sort((a, b) => b.count - a.count);
        const first = arr[0].count;

        return arr.filter(obj => obj.count === first);
    };

    const fetchActivities = (from, userId, repoId) =>
        fetch(`https://api.github.com/repos/${userId}/${repoId}/commits?per_page=100`)
        .then(commits => commits.json())
        .then(data => data.filter(obj =>
            Date.parse(`${obj.commit.author.date}`) > from))
        .then(obj => countCommits(obj).splice(1))
        .then(result => filterActiviti(result));

    const getStartDate = days => new Date().setDate(new Date().getDate() - days);

    const getMostActiveDevs = data => {
        const { days, userId, repoId } = data;
        const from = getStartDate(days);

        console.log(fetchActivities(from, userId, repoId));
        return fetchActivities(from, userId, repoId);
    };