// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
while (true) {
  investment = parseFloat(prompt("Enter investment amount as xxxx.xx"));
  if (!isNaN(investment)) {
    break;
  }
}
while (true) {
  rate = parseFloat(prompt("Enter interest rate as xx.x"));
  if (!isNaN(rate) && rate >= 0 && rate <= 6) {
    break;
  }
}
while (true) {
  years = parseInt(prompt("Enter the number of years you want to invest for"));
  if (!isNaN(years) && years >= 1 && years <= 30) {
    break;
  }
}

// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
  futureValue = futureValue + (futureValue * rate) / 100;
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);
