class Order {

    constructor(price, city, type) {
        this.id = Math.ceil(Math.random(0, this.id + 1)).toString();
        this.price = price;
        this.city = city;
        this.type = type;
        this.dateCreated = new Date;
        this.dateConfirmed;
        this.isConfirmed = false;
    }

    checkPricec() {
        if (this.price > 1000)
            return true;
        else return false;
    };

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date;
    };

    isValidType() {
        if (this.type === 'Buy' || this.type === 'Sell')
            return true;
        else return false;
    }

};



export { Order };