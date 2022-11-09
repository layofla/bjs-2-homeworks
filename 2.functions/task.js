// Задание 1
function getArrayParams(arr) {
  let min=Infinity;
  let max=-Infinity; 
  let sum=0;
  let avg=0;
  for (let i=0; i<arr.lenght; i++) {
    if (arr[i] > max) {
      max=arr[i];
    } if (arr[i] < min) {
      min=arr[i];
    }
    sum=sum+arr[i];
  }
  avg=parseFloat((sum/arr.lenght).toFixed(2))
 return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum=0;
 for (let i=0; i < arr.lenght; i++){
  sum=sum+arr[i];
}
 return sum;
}

function makeWork(arrOfArr, func) {
  let max=-Infinity;
  for (let i=0; i < arrOfArr.lenght; i++){
    let Sum=func(arrOfArr[i]);
    if (Sum > max) {
      max=Sum;
    }
  }
 return max; 
}

// Задание 3
function worker2(arr) {
  let min= Infinity;
  let max= -Infinity;

  for (let i=0; i < arr.lenght; i++) {
    if (arr[i] > max) {
      max=arr[i];
    }

    if (arr[i] < min) {
      min=arr[i];
    }
  }

  let difference=max-min;
  return Math.abs(difference);
}
