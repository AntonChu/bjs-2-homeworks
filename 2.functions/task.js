// Задание 1
function getArrayParams(arr) {
  let min = arr[0],
  max = arr[0],
  sum = arr[0]; 

  for (let i = 1; i < arr.length; i++){
    sum += arr[i];

    if (max < arr[i]){
      max = arr[i];
    }

    if (min > arr[i]){
      min = arr[i];
    }
  }

  let avg = +(sum / arr.length).toFixed(2);
  
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  return sum = arr.reduce((a, b) => a + b, 0);
}

function makeWork(arrOfArr, func) {
  let max = 0;

  for (let i = 0; i < arrOfArr.length; i++){
    if(max < func(arrOfArr[i])){
      max = func(arrOfArr[i]);
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  return difference = Math.abs(Math.max(...arr) - Math.min(...arr));
}

