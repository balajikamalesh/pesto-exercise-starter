const path = require("path");
const fs = require("fs");
const add = (a, b) => a + b;

const fileContent = fs.readFileSync(
  path.join(__dirname, "dataset.json"),
  "utf-8"
);

const { bankBalances } = JSON.parse(fileContent);

function hundredThousandairs() {
  return bankBalances.filter((balance) => Number(balance.amount) > 100000);
}

function datasetWithRoundedDollar() {
  return bankBalances.map((balance) => {
                      balance.rounded = Math.round(balance.amount);
                      return balance;
                    });
}

function sumOfBankBalances() {
  const result = bankBalances.map((balance) => Number(balance.amount)).reduce(add, 0);
  return Number(result.toFixed(2));
}

function sumOfInterests() {
  const filteredBankBalances = bankBalances.filter((balance) => balance.state === 'WI'
                                                           || balance.state === 'IL'
                                                           || balance.state === 'WY'
                                                           || balance.state === 'OH'
                                                           || balance.state === 'GA'
                                                           || balance.state === 'DE');
  const result = filteredBankBalances.map((balance) => Math.round(0.189 * Number(balance.amount) * 100) / 100).reduce(add, 0);
  return Math.round(result * 100) / 100;
}

function higherStateSums() {
  var result = [];
  bankBalances.reduce(function(res, value) {
    if (!res[value.state]) {
      res[value.state] = { state: value.state, amount: 0 };
      result.push(res[value.state])
    }
    res[value.state].amount += Number(value.amount);
    return res;
  }, {});

  var moreThanMillionStates = result.filter(function(balance) { return balance.amount > 1000000;})
                                    .map(function(balance){ return balance.amount});

  return moreThanMillionStates.reduce(add, 0);
}

export {
  hundredThousandairs,
  datasetWithRoundedDollar,
  sumOfBankBalances,
  sumOfInterests,
  higherStateSums
};
