const defer = (func, ms) => {

    return function() {

        setTimeout(() => func.apply(this, arguments), ms);
    };
};

const user = {
    name: 'James',
    sayHi() {

        console.log(`Helo world, my name is ${this.name}!`);
    },
};

/* const deferHi = defer(user.sayHi, 2000);
deferHi.apply(user); */
export { defer };