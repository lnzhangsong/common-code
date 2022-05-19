// 创建一个传入对象为原型的新对象
function create(obj) {
  function F() { }; // 创建一个空函数 其原型为 Object
  F.prototype = obj; // 将obj的原型赋值给F的原型 修改函数 F 原型
  return new F(); // 返回一个新的对象，该对象的原型为F的原型
}

// 与 new 函数的区别 new 是 新建一个对象，并且设置对象的原型为构造函数的原型