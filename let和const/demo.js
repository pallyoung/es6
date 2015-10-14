/*demo.js*/

/*
*@description test const
*/
try{
	const A;//严格模式下编译失败，非严格模式下A==undefined，且不能修改
	A = "A";
}catch(e){
	console.log(e.message);
}
console.log(A);

const B  = "B";

try{
	B = "A";//严格模式下会抛出异常
}catch(e){
	console.log(e.message);
}

console.log(B);

/**
*@description test let
*var声明和let声明的差异
*1、使用var声明变量时，变量声明提前。使用let声明变量时不会有这个情况。
*2、var声明变量没有块级作用域的概念，let声明的变量作用域只限制在当前块内
**/


(function(){
	"use strict"
	//使用var声明变量
	{	
		{
			console.log(a);//output:undefined
			var a = 'a';
			console.log(a);//output:a
		}
		
	/*************************************/

		{
			console.log(a);//output:a
		}

	}

	//使用let声明变量
	{	
		
		{
			try{
				console.log(b);//output:throw error
			}catch(e){
				console.log(e.message)
			}
			let b = 'b';
			console.log(b);//output:b
		}

	/*************************************/

		{
			try{
				console.log(b);//output:throw error
			}catch(e){
				console.log(e.message)
			}
		}
	}

})()


