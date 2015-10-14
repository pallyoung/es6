/*Getter/Setter.js*/

var width = 1;
var height = 2;
var obj = {
	get width(){
		return "width:"+width;
	},
	set width(v){
		width = v;
	},
	get height(){
		return "height:"+height;
	}
}

console.log(obj.width);
obj.width = 2;
console.log(obj.width);

console.log(obj.height);
obj.height = 3;//no use
console.log(obj.height);
console.log(944/20);