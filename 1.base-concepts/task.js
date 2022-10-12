"use strict"
function solveEquation(a, b, c) {
  let arr=[];
  let x1;
  let x2;
  let D=b**2-4*a*c;
  if (D<0) {
    arr=[];
  } else if (D===0) {
    x1=-b/(2*a);
    arr.push(x1);
  } else if (D>0) {
    x1=-b+Math.sqrt(D)/(2*a);
    arr.push(x1);
    x2=-b-Math.sqrt(D)/(2*a);
    arr.push(x2);
  }
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
