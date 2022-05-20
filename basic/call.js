
Function.prototype.myCall = function (content) {
  // 在 context 上调用方法，触发 this 绑定为 context，使用 Symbol 防止原有属性的覆盖
  const key = Symbol('Key'); // 确定属性的唯一性
  content[key] = this; // 获取当前对象  content[key]() 即为当前对象的构造函数
  const args = [...arguments].slice(1); // 类数组解构变为数组 并获取除构造函数外的传入参数
  const res = content[key](...args); // 执行传入对象的构造函数
  delete content[key] // 删除当前对象，只是利用其构造函数而已，如果保留的话会造成
  return res; // 返回执行结果。
}

Function.prototype.myApply = function (content) {
  const key = Symbol('Key');
  content[key] = this;
  let res;
  if (arguments[1]) { // 判断是否有传入参数 类型是数组
    res = content[key](...arguments[1])
  } else {
    res = content[key]()
  }
  return res;
}