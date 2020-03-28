export const compose = (...funcs) => num => {
    return funcs.reduce((acc, funcs) =>
        funcs(acc), num);
};