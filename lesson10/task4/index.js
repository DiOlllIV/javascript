const getMaxAbsoluteNumber = arr => {
    const absolute = arr.map(elem => Math.abs(elem));

    return Math.max(...absolute);
};