function compareArrays(arr1, arr2) {
  return arr1.every((element) => element === arr2[arr1.indexOf(element)]) && arr1.length === arr2.length; 
}

function advancedFilter(arr) {
  return arr.filter((item) => item > 0 && item % 3 === 0).map((element) => element * 10);
}
