function cachingDecoratorNew(func){
  let cache = [];
  return (...args) => {
    const hash = args.join(',');
    debugger;
    for(let item of cache){
      if(item[hash]){
        return 'Из кэша: ' + item[hash];
      }
    }
    
    const result = func(...args);
    cache.push({[hash]: result});
    if(cache.length > 5){
      cache.shift();
    }

    return "Вычисляем: " + result;
  }  
}


function debounceDecoratorNew(func, delay) {
  let timeId = null;

  function wrapper(...args){
    wrapper.allCount++;

    if(!timeId){
      func(...args);
    }
      
    clearTimeout(timeId);
    timeId = setTimeout(() => {
      func(...args),
      wrapper.count++
    }, delay)
  } 
  
  wrapper.count = 0;
  wrapper.allCount = 0;
  return wrapper;
}