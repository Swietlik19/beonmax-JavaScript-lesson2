

let money, time;

// function start() {
//   money = +prompt("Ваш бюджет на месяц:", "");
//   time  = prompt("Введите дату в формате YYYY-MM-DD", "");

//   while(isNaN(money) || money == "" || money == null) {
//     money = +prompt("Ваш бюджет на месяц:", "");
//   }
// }

// start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function() {
    for (let i = 1; i < 3; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
      if (typeof (a) === 'string' && typeof (a) != null && typeof (b) === 'string' &&
        typeof (b) != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
      } else {
        alert("Неверные данные");
        i--;
      }
    }
  },
  chooseUnnecessary: function() {
    for (let i = 1; i <= 3; i++) {
      let a = prompt("Статья необязательный расходов?", "");
      if (typeof (a) === 'string' && typeof (a) != null && a != '' && a.length < 50) {
        appData.optionalExpenses[i] = a;
      } else {
        alert("Неверные данные");
        i--;
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseIncome: function() {

    let notcheck = true;
    let items = '';
    while (notcheck) {
      items = prompt('Что принесет доп доход?', '');    
      if (typeof (items) === 'string' && typeof (items) != null && items != '') notcheck = false;
    } 
    appData.income = items.split(', ');
    appData.income.push(prompt('Может что-то ещё?'));
    appData.income.sort();    
  }
};

for (let i in appData) {
  console.log("Наша программа включает в себя данные: " + appData[i]);
}
