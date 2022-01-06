/**
 * debounce function
 * @param {Function} func - function to debounce 
 * @param {Number} wait - time to wait before calling function
 */
function debounce1st(fn, delay) {
  let timer = null; // closure variable to hold the timer
  // execute the function every time, clear the timer and set a new timer  
  return function() { // return the debounced function
    clearTimeout(timer); // clear original timer
    timer = setTimeout(fn, delay); // set new timer with delay
  }
}


function debounce2nd(fn, delay){
  let timer = null;
  return function() {
    const _this = this; // save this context of calling function
    const args = arguments; // save arguments of calling function (event)
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(_this, args); // modify point of this and arguments
    }, delay);
  }
}