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



function debounceDecoratorNew(func, delay) {
  let timeId = null;

  function wrapper(...args){
    debugger;
    wrapper.allCount++;
    if(timeId){
      clearTimeout(timeId);
    }else{
      console.log(func(...args));
      wrapper.count++
    } 

    timeId = setTimeout(() => {
      console.log(func(...args)),
      wrapper.count++
    }, delay)
  } 
  
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}
