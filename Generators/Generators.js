/**
*Generators.js
**/
'use strict'
function *simpleGen (argument) {
	var i = 0;
	while(i<10){
		yield (console.log(i),i);
		i++;
	}
}
//调用Generator函数返回一个Iterator对象

{
	let iter = simpleGen();
	let v = iter.next();
	while(!v.done){
		v = iter.next();
	}
}


/*
*带参数的Generator
*/

var arr = [1,2,3,4,5,6]
function* gen(msg){
	while(true){
		msg = yield console.log(msg);
	}
}

{
	let iter = gen("begin");
	iter.next();
	for(let v of arr){
		iter.next(v);
	}
	iter.next("end");
}