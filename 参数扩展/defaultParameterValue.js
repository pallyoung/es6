/**
*defaultParameterValue.js
**/

/*
* 暂时不支持

function f (x, y = 7, z = 42) {
    return x + y + z;
}
console.log(f(1));
*/

function f1(x,y,z){
	y = y || 7;
	z = z || 42;
	return x + y + z;
}

console.log(f1(1));