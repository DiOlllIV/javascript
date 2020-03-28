const calc = initialValue => {
    let sum = initialValue;

    const calculator = {
        add(number) {
            sum += number;
            return this;
        },
        subtract(number) {
            sum -= number;
            return this;
        },
        mult(number) {
            sum *= number;
            return this;
        },
        div(number) {
            sum /= number;
            return this;
        },
        result() {
            return sum;
        },
    };
    return calculator;
};