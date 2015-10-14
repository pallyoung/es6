/*Class.js*/
"use strict"

class Human{
	constructor(name){
		this.name = name;
	}
	say (msg) {
		console.log(this.name+":"+msg);
	}
	//静态方法
	static say(){
		console.log(this.name+":hello!");
	}
}

Human.say = function (argument) {
	console.log("static:hello!");
}

class Man extends Human{
	constructor(name){
		super(name);
		this.gender = "male";
	}
	work(){
		this.say("I'm working");
	}


}
new Human("Jim").say("hello");
Human.say();
new Man("Sam").work();
//静态方法同样会被继承
Man.say();