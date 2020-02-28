const wallet = {
    transactions: [33, 565, 678, 23, 55, 77, 007],

    getMin() {
        return Math.min(...this.transactions);
    },

    getMax() {
        return Math.max(...this.transactions);
    },
};


export { wallet };