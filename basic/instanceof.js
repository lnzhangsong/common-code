// 判断对象和构造函数是否是同一个类型
function myInstanceof(obj, clazz) {
  const objProto = obj.__proto__; // 对象的原型
  let clazzProto = clazz.prototype; // 构造函数的原型
  while (true) { // 循环判断
    if (objProto === null) return false; // 如果对象的原型为null，则返回false
    if (objProto === clazzProto) return true; // 如果对象的原型与构造函数的原型相同，则返回true
    objProto = objProto.__proto__; // 对象的原型的原型 (原型链)
  }
}