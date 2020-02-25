let num = 0;

export function add(number) {
    num += number;
};

export function decrease(number) {
    num -= number;
};

export function reset() {
    num = 0;
};

export function getMemo() {
    return num;
};