const defer = (func, ms) => {
    return function() {
        setTimeout(() => func.aplly(this, arguments), ms);
    };
};

const user = {
    name: 'James',
    sayHi() {
        console.log(`Helo world, my name is ${this.name}!`);

    },
};


export { defer };