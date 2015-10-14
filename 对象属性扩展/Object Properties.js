/*Object Properties.js*/

/**
*支持用变量命名属性
*简写方式声明方法
**/
var name = "name";

var val = "hello world";

function fun (msg) {
	console.log(msg);
}

var obj = {
	[name]:"name",
	fun(){
		console.log("asdfghj");
	}
}
obj.fun(obj.name);
/**
*支持属性简写
**/
var obj2 = {val,fun};

/*
*等价于 obj2 = {val:val,fun:fun}
*/

obj2.fun(obj2.val);


