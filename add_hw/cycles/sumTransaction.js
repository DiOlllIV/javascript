const dayTransactions = [
    { currency: 'USD', amount: 60, operation: 'sell' },
    { currency: 'EUR', amount: 160, operation: 'buy' },
    { currency: 'EUR', amount: 90, operation: 'sell' },
];

const operationMapping = { buy: '+', sell: '-' };

function getTotalBalance(transactionsList) {
    const result = transactionsList.reduce(function(acc, transactionObj) {
        const { currency, amount, operation } = transactionObj;
        const valueStr = operationMapping[operation] + amount

        acc[currency] = (acc[currency] || 0) + +valueStr

        return acc;
    }, {});

    return result;
};

const result = getTotalBalance(dayTransactions);
console.log(result);