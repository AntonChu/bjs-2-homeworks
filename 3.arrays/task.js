function compareArrays(arr1, arr2) {
  return (arr1.length !== arr2.length) ? false : arr1.every((element, index) => element === arr2[index]);
}

function advancedFilter(arr) {
  return arr.filter((item) => item > 0 && item % 3 === 0).map((element) => element * 10);
}
