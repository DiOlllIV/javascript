const wallet = {
    transactions: [33, 565, 678, 23, 55, 77, 007],

    getMax() {
        return Math.max(...this.transactions);
    },

    getMin() {
        return Math.min(...this.transactions);
    },
};


export { wallet };