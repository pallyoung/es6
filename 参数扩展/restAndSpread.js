/**
*restAndSpread.js
**/


/**
*rest parameter 不定参数
**/

function f (v1,v2,...values) {
	var sum = v1+v2;
	for (var v of values) {
    	sum += v;
  	}
	return sum;
}

console.log(f(1,2,3,4,5));

/**
*Spread Operator
*rest的逆操作
**/
var params = [3,4,5];
var other = [1, 2,...params ] // [ 1, 2, , 3, 4,5 ]


console.log(f(1,2,...params));
console.log(other);

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]

console.log(chars);
