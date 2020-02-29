class Wallet {
    _balace = 0;

    getBalance() {
        return this._balace;
    }

    deposite(amount) {
        return this._balace += amount;
    }

    withdraw(amount) {
        if (amount > this._balace) {
            console.log('Not enough funds');
            return;
        }

        this._balance -= amount;
    }
};



export { Wallet };