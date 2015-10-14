/*Array.js*/
'use strict'
/*
*Array.prototype.find
*@des 查找元素
*依次遍历元素，返回第一个符合条件的value的index，如果都不符合返回undefined
*@return index||undefined
*/

var arr = [1,2,3,3,5,6];

var i = arr.find(function(v){
	return v ===3
});

console.log(i);

/*
*Array.prototype.findIndex
*@des 查找元素
*依次遍历元素，返回第一个符合条件的value的index，如果都不符合返回-1
*@return  index||-1
*/

i = arr.findIndex(function(v){
	return false;
});
console.log(i);

/*
*Array.prototype.fill
*@des 用固定值填充数组
*@param Object:value Number:formIndex Number:endIndex
*@return this
*/

arr.fill("a");

console.log(arr);

arr.fill("b",1,3);
console.log(arr);

/*
*Array.prototype.copyWithin
*@des 用formIndex到endIndex之间的值去替换从targetIndex开始的值
*@param Number:targetIndex Number:formIndex Number:endIndex
*@return this
*/
var arr2 = [0,1,2,3,4,5,6]

//用a[4] a[5]替换a[1] a[2]
arr2.copyWithin(1,4,6);
console.log(arr2);


/*
*Array.prototype.entries
*@des 
*@return entries
*/

console.log(arr.entries());

/*
*Array.prototype.keys
*@des 
*@return keys
*/
console.log(arr.keys());

/*
*Array.prototype.values
*@des 暂时不支持
*@return values

*/

//console.log(arr.values());

/*
*Array.from
*@des 将对象转成数组
*@return new Array
*/
//字符串
var s = "hello,world"

{
	let a = Array.from(s);
	console.log(a)
}

//对象
var o = {
	a:"a",
	b:"b",
	length:3
}
{
	let a = Array.from(o);
	console.log(a)
}
//set
var set = new Set();
set.add(1);
set.add(2)
{
	let a = Array.from(set);
	console.log(a)
}

//map

var m = new Map();
m.set(1,2);
m.set(3,4)
{
	let a = Array.from(m);
	console.log(a)
}

/*
*Array.of
*@des arguments转换成数组
*@return new Array
*/

{
	let arr =  Array.of(1,2,3);
	console.log(arr);

	//等价于
	function ArrayOf(...args){
		return [...args];
	}

	let arr2  = ArrayOf(1,2,3);
	console.log(arr2);
}
