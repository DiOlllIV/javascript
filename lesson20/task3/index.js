class Wallet {
    #balance = 0;

    getBalance() {
        return this.#balance;
    }

    deposite(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        if (amount > this.#balance) {
            console.log('No enough funds');
            return false;
        }

        this.#balance -= amount;
    }
}



export { Wallet };