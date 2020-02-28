const vehicle = {

    move() {
        return `${this.name} is moving`;
    },

    stop() {
        return `${this.name} is stopped`;
    },

    __proto__: ship,
};

const ship = {
    name: 'Argo',

    startMachine() {
        this.move();
        return `${this.name} lifting anchor up`;
    },

    stopMachine() {
        this.stop();
        return `${this.name} lifting anchor down`;
    },

    __proto__: vehicle,
};



export { vehicle, ship };