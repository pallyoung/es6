/*Iterators.js*/
'use strict'

var arr = [1,2,3,4,5,6]

//通过Symbol.iterator 获取一个Iterator
var iter = arr[Symbol.iterator]();

/**遍历
*@return value
*{
	value:value,
	done:true||false
	}
**/
let v=iter.next();


while(!v.done){
	console.log(v.value);
	v = iter.next();

}

Object.prototype[Symbol.iterator] = function(){
	var keys = Object.keys(this);
	var key = 0;
	var self = this;
	return {
		next:function(){
			if(key<keys.length){
				return {value:self[keys[key++]],done:false}
			}else{
				return {value:undefined,done:true}
			}
		}
	}
}
var obj = {
	a:"a",
	b:"b",
	c:"c",
	d:"d",
	e:"e"
}

for(let v of obj){
	console.log(v)
}

{
	let iter = obj[Symbol.iterator]();

	let v=iter.next();


	while(!v.done){
		console.log(v.value);
		v = iter.next();

	}
}

