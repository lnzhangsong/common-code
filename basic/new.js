/**
 * new options simply achieved 
 * 1. create a new object
 * 2. set the object's prototype to the constructor's prototype
 * 3. set the object's constructor to the constructor
 * 4. return the object
 */

const newObject = () => {
  const obj = {}; // create a new object
  // at this time, obj.__proto__ is Object
  // arguments remains the arguments of the function 
  // because it is a like-array so need to use call or apply
  const constructor = [].shift.call(arguments); // get the first argument of the arguments array as the constructor function 
  // object's prototype use __proto__ constructor's prototype use prototype
  // for extend the constructor's prototype, so make the next options 
  obj.__proto__ = constructor.prototype;  // set the prototype of the object to the prototype of the constructor function 
  const res = constructor.call(obj, arguments); // borrow constructor for giving obj arguments
  // obj has constructor's prototype and arguments 
  // if constructor return a value, it will be a value not a object.
  return typeof res === 'object' && res !== null ? res : obj;
}