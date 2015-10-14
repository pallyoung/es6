/*Promise.js*/

var i = Math.random()*10
var promise = new Promise(function(resolve,reject){
	if(i = 5){
		resolve();
	}else{
		reject();
	}
});

promise.then(function(){
	console.log("resolved");
},function(){
	console.log("rejected");
})