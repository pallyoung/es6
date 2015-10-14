/*Object*/

/*
*Object.assign
*@des 对象拷贝
*/

var o1 = {a:1,b:2}
var o2 = {}

//对象
Object.assign(o2,o1)
console.log(o2);

//数组
var a1 = [1,2,3];
Object.assign(o2,a1);
console.log(o2);

Object.prototype.assign = function(...args){
	Object.assign(this,...args);
}

var o3 = {}
o3.assign(a1,o1);

console.log(o3);