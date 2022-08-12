'use strict';

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c; 

  if (discriminant > 0){
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  } else if (discriminant === 0){
    arr.push(-b / (2 * a));
  } 
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

  for (let i = 0; i < 4; i++){
    let argument;
    if (isNaN(+arguments[i])){
      
      if (i === 0) {
        argument = "Процентная ставка";
      } else if (i === 1) {
        argument = "Начальный взнос";
      } else {
        argument = "Общая стоимость";
      } 

      return `Параметр "${argument}" содержит неправильное значение "${arguments[i]}"`
    }
  }

  let percentPerMonth = +percent / (100 * 12);
  let bodyOfCredit = +amount - +contribution;
    
  if (bodyOfCredit === 0){
    return 0;
  }

  let creditDuration = (date.getFullYear() - new Date().getFullYear()) * 12;
  let paymentPerMonth =  bodyOfCredit * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** creditDuration) - 1)))
  let totalAmount = (paymentPerMonth * creditDuration).toFixed(2);

  return Number(totalAmount);
}
