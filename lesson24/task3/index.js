const getDiff = (startDate, endDate) => {

    diff = new Date(startDate) - new Date(endDate);

    const daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hourDiff = Math.floor((diff / 1000 / 60 / 60) % 24);
    const minDiff = Math.floor((diff / 1000 / 60) % 60);
    const secDiff = Math.floor((diff / 1000) % 60);

    return `${Math.abs(daysDiff)}d ${Math.abs(hourDiff)}h ${Math.abs(minDiff)}m ${Math.abs(secDiff)}s`;
};

/* console.log(getDiff('1992-03-04 22:22:22', '1993-03-04 00:00:00')); */


export { getDiff };