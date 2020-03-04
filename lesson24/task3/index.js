const getDiff = (startDate, endDate) => {

    if (startDate < endDate)
        diff = new Date(endDate) - new Date(startDate);

    else diff = new Date(startDate) - new Date(endDate);
    const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hourDiff = Math.floor((diff / 1000 / 60 / 60) % 24);
    const minDiff = Math.floor((diff / 1000 / 60) % 60);
    const secDiff = Math.floor((diff / 1000) % 60);

    return `${daysDiff}d ${hourDiff}h ${minDiff}m ${secDiff}s`;
};

/* console.log(getDiff('1992-03-04 22:22:22', '1993-03-04 00:00:00')); */


export { getDiff };