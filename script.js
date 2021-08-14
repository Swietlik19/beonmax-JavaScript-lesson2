(function () {
  'use strict';

  let money = prompt("Ваш бюджет на месяц:",""),
      time = prompt("Введите дату в формате YYYY-MM-DD", ""),
      appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: false,
      },
      expensesItem = prompt("Введите обязательную статью расходов в этом месяце", ""),
      expensesCost = prompt("Во сколько обойдется?", ""),
      expensesItem2 = prompt("Введите обязательную статью расходов в этом месяце", ""),
      expensesCost2 = prompt("Во сколько обойдется?", "");

  appData.expenses.expensesItem = expensesCost;
  appData.expenses.expensesItem2 = expensesCost2;
  
  console.log(appData);
  alert(appData.budget / 30);
  
})();
