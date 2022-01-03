/**
 * curry :: (a -> b -> c) -> a -> b -> c
 * @param {Function} fn
 * @param {Any} arg1
 * @return {Function}
 */

function curry (fn, args) {
  let len = fn.length
  args = args || [];
  console.log(fn, args);

  return function () {
    let _args = args.concat(Array.prototype.slice.call(arguments));
    if (_args.length >= len) {
      return fn.apply(this, _args);
    } else {
      return curry(fn, _args);
    }
  };
}

curry(function (a, b, c) {
  console.log(a, b, c);
})(1)(2)(3);


