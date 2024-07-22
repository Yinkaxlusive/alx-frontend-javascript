import getFullBudgetObject from './9-getFullBudget.js';

const fullBudget = getFullBudgetObject(20, 50, 10);

console.log(fullBudget.getIncomeInDollars(fullBudget.income)); // Should output: $20
console.log(fullBudget.getIncomeInEuros(fullBudget.income));   // Should output: 20 euros

