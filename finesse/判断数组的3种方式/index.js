// 方法1
// 利用object原型上的toString方法, 他会返回一个数据的特性
function isArray1(val) {
  return Object.prototype.toString.call(val) === '[object Array]';
}
// 缺陷，在ES6出来后可以通过Symbol.toStringTag的方法改变一个对象的toString结果
// 如果改成了Array，这个判断方法就会将一个对象判断为数组
const obj = {
  [Symbol.toStringTag]: 'Array'
};
console.log(isArray1(obj)); // obj是一个对象，但是结果仍然为true

// 方法2
// 通过原型链的方法判断，instanceof是一个运算符
// 用来判断右边构造函数的prototype是否出现在左边数据的原型链上
function isArray2(val) {
  return val instanceof Array;
}
// 缺陷，可以通过Object构造函数的静态方法setPrototypeOf
// 该方法可以将一个参数的原型链设置为第二个参数
// 也就是说如果我将第二个参数设置为Array构造函数的原型的话，一个参数的原型链上就有了Array
const obj2 = [];
Object.setPrototypeOf(obj2, Array.prototype);
console.log(obj2.__proto__ === Array.prototype); // true
console.log(isArray2(obj2)); // obj是一个对象，但是结果仍然为true

// 方法3
// 最好的方法，是Array构造函数的静态方法
function isArray3(val) {
  return Array.isArray(val);
}

// 方法4
// constructor是Object构造函数的一个原型方法
// 该方法返回一个函数的引用，该函数就是创建调用实例的构造函数
function isArray4(val) {
  return val.constructor === Array; // 同样可以用来判断是不是对象
}

// 方法5
// 该方法是通过调用Object上的静态方法getPrototypeOf，来获取原型对象
// 它和instanceof类似都是通过原型的方法来判断
// 和instanceof的区别是该方法只会查找当前实例的一层隐式原型，而不会一直向上查找
function isArray5(val) {
  return Object.getPrototypeOf(val) === Array.prototype; // 同样可以用来判断是不是对象
}
// 和instanceof的区别
Object.getPrototypeOf([]) === Object.prototype; // 为false，只查找一层，Object的原型在更上层
[] instanceof Object; // 为true，因为是链式的查找，数组的顶层依旧是有Object的原型
