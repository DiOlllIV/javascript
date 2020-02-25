export default arr => {

    if (!Array.isArray(arr) || arr.length === 0)
        return null;

    const squared = arr.map(num => (num * num));

    return Math.min(...squared);
};