function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(',');
    let objectInCache = cache.findIndex((item) => item.hash === hash); 
    if (objectInCache !== -1) { 
        console.log("Из кэша: " + cache[objectInCache].result); 
        return "Из кэша: " + cache[objectInCache].result;
    }

    let result = func(...args); 
    cache.push({hash, result}) ; 
    if (cache.length > 5) { 
      cache.shift(); 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}
return wrapper;
}



function debounceDecoratorNew(func) {
  let time = null;
  
function wrapper (...args){
    if (time === null) {
      func(...args);
    }
    clearTimeout(time);
    time = setTimeout(() => time = null, ms);
  }
  return wrapper;
} 

function debounceDecorator(func, ms) {
  let time = null;
  function wrapper(...args){
    if (time === null) {
      func(...args);
    }
    clearTimeout(time);
    time = setTimeout(() => time = null, ms);
    wrapper.count++;
  }
  return wrapper;
} 
