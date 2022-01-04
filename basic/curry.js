/**
 * curry :: (a -> b -> c) -> a -> b -> c
 * @param {Function} fn
 * @param {Any} arg1
 * @return {Function}
 */

function curry (fn, args) {
  // get the number of formal arguments
  let len = fn.length
  // get actual arguments, if it is not provided then use empty array
  args = args || [];
  // return a function that will be called when the 
  // number of arguments is equal to the number of formal arguments
  return function () {
    // like-array to array
    // concat the arguments with the arguments that are passed to the function
    let _args = args.concat(Array.prototype.slice.call(arguments));
    console.log(_args, arguments, len);
    if (_args.length >= len) {
      // call the original function with the arguments
      return fn.apply(this, _args);
    } else {
      // return a new function that will be called when the
      return curry(fn, _args);
    }
  };
}

var fn = curry(function (a, b, c) {
	console.log([a, b, c], '\n');
});

fn("a", "b", "c"); // ["a", "b", "c"]
fn("a", "b")("c"); // ["a", "b", "c"]
fn("a")("b")("c"); // ["a", "b", "c"]
fn("a")("b", "c"); // ["a", "b", "c"]
