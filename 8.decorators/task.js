function cachingDecoratorNew(func){
  let cache = [];
  return (...args) => {
    const hash = args.join(',');
    if(hash in cache){
      return 'Из кэша: ' + cache[hash];
    }

    const result = func(...args);
    cache[hash] = result;
    if(cache.length > 5){
      cache.shift();
    }

    return "Вычисляем: " + result;
  }  
}


// function debounceDecoratorNew(func, delay) {
//   debugger;
//   let timeId = null;
//   return function(...args){
    
//     if(timeId === null){
//       timeId = setTimeout(() => {
//         return func(...args);
//       }, delay)
//       return func(...args);
//     }

//     if(timeId){
//       clearTimeout(timeId);
//     }

//     timeId = setTimeout(() => {
//       return func(...args);
//     }, delay)
//   } 
// }

const sum = (...args) => args.reduce((acc, item) => acc + item, 0);

function debounceDecoratorNew(func, delay) {
  let timeId = null;
  return function(...args){
    // debugger;
    if(timeId){
      clearTimeout(timeId);
    }else{
      console.log(func(...args));
    } 

    timeId = setTimeout(() => {
      console.log(func(...args))
    }, delay)
  } 
}

let debSum = debounceDecoratorNew(sum, 5000);

debSum(1, 2, 3);