function swap(arr) {
    const [first, ...spread] = arr;

    return [...spread, first];
}