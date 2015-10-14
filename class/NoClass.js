/*NoClass.js*/
function Human (name) {
	this.name = name;
}
Human.prototype ={
	say:function(msg){
		console.log(this.name+":"+msg);
	}
};


function American(name){
	Human.call(this,name);
	this.state = "America";
}

American.prototype = new Human("");

American.prototype.greet = function(){
	this.say("hello,I'm from "+this.state+".");
}
new Human("Jim").say("hello");
new American("Sam").greet();