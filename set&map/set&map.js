/*set&map.js*/
'use strict'
/*
*Set
*@description
*一种新的数据结构，保证值的唯一性
*/

var s = new Set();
//添加新值
s.add("hello");
s.add("world");
//判断是否存在某个值,存在返回true 不存在返回false
console.log(s.has("hello"));

//获取大小
console.log(s.size);
//delete
s.delete("hello");
console.log(s.size);
//清除
s.clear()


//遍历
{
	let s = new Set(("hello,world").split(""));

	//key
	let keys =  s.keys();
	for(let v of keys){
		console.log(v);
	}
	//value
	let values =  s.values();
	for(let v of values){
		console.log(v);
	}
	//[key,value]
	let entries = s.entries();
	for ( let v of entries ){
  		console.log(v);
	}

	//foreach
	s.forEach(function(v){
		console.log(v)
	})
}

/**
*WeakSet
*@description
*无法遍历 没有size属性
*只能存储对象
*里面的对象都是弱引用（没有其他变量引用的时候会被销毁，无需考虑内存泄露）
**/

var ws = new WeakSet();


/**
*Map
*@description
*可以接受任何对象做为key
**/

var m = new Map();

m.set("a","a");
m.set("b","b");
m.get("a");
console.log(m.size);

m.delete("a")
console.log(m.size);
m.clear();
console.log(m.size);
//接受数组
var m2 = new Map([["a","a"],["b","b"]]);


//遍历 同Set