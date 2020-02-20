function withdraw(clients, balances, client, amount) {

    for (let i = 0; i < clients.length; i++) {

        if (clients[i] === client) {
            if (amount > balances[i]) {
                return -1;
            }
            balances[i] -= amount;
            return balances[i];
        }
    }
}