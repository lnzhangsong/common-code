function Parent() {
    this.property = "superproperty";
    this.colors = ["red", "blue", "green"];
}
Parent.prototype.getParentValue = function() {
    return this.property;
}
function Sub() {
    this.subproperty = "subproperty";
}
// 创建 Parent 的实例，并将该实例赋值给 Sub.prototype
// 这样，Sub.prototype 就会具有 Parent.prototype 的所有属性和方法
Sub.prototype = new Parent(); 
Sub.prototype.getSubValue = function() {
    return this.subproperty;
}

let instance1 = new Sub();
let instance2 = new Sub();
console.log(instance1.getParentValue()); // "superproperty"

instance1.colors.push("black");
console.log(instance1.colors); // ["red", "blue", "green", "black"]
console.log(instance2.colors); // ["red", "blue", "green", "black"]



