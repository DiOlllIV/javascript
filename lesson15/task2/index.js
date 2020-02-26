export function createCalculator() {

    let res = 0;

    function add(num) {
        return res += num;
    };

    function decrease(num) {
        return res -= num;
    };

    function reset() {
        return res = 0;
    };

    function getMemo() {
        return res;
    };

    return {
        add,
        decrease,
        reset,
        getMemo,
    }

};