export const sum = num =>
    num === 1 ? 1 :
    num + sum(num - 1);

/* const sum = num => {
    let arr = [];
    for (let i = 0; i <= num; i++) {
        arr.push(i);
    }
    return arr.reduce((acc, rec) => acc + rec);
}; */