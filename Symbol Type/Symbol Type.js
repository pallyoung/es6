/**
*Symbol Type.js
**/

/**
*基础数据类型
*产生唯一的不与任何对象相等的值
*可用作对象属性名
**/

var sym = Symbol();
var sym2 = Symbol();
console.log(typeof sym);

console.log(sym == sym2);

//可参入参数，除了可以用作在控制台打印时区别其他Symbol对象时，没有其他作用

var sym3 = Symbol("sym3");
var sym4 = Symbol("sym3");
console.log(sym3);
//依旧不相等
console.log(sym3 == sym4);


/**
*Symbol.for
@description
*接受一个字符串作为参数
*如果产生过用该字符串做参数生产的Symbol对象(也必须通过Symbol.for生成)则返回该对象
*否则生产新的Symbol对象
**/

var sym5 = Symbol.for("sym3");
var sym6 = Symbol.for("sym3");

//依旧不相等
console.log(sym3 == sym5);
//相等
console.log(sym6 == sym5);

/**
*Symbol.keyFor
@description
*接受一个Symbol对象作为参数
*返回Symbol对象(通过Symbol.for生成)的key
**/

console.log(Symbol.keyFor(sym3));
console.log(Symbol.keyFor(sym5));