/**
*Sticky Matching.js
**/


/**
*粘连修饰符
*执行全局匹配
*y修饰符确保匹配严格从剩余的第一个位置（即lastIndex得位置）开始匹配
*同时使用g修饰符和y修饰符，则y修饰符覆盖g修饰符
*sticky表示是否设置了y修饰符
*暂时不支持
*/

//var y = /a2/y;
//y.sticky
var g = /a2/g;
var s = "a2a3a2";
//console.log(y.exec(s));
//console.log(y.exec(s));
console.log(g.exec(s));//output:[ 'a2', index: 0, input: 'a2a3a2' ]
console.log(g.exec(s));//output:[ 'a2', index: 4, input: 'a2a3a2' ]



// ES5的source属性
// 返回正则表达式的正文
/abc/ig.source
// "abc"

// ES6的flags属性
// 返回正则表达式的修饰符
/abc/ig.flags
// 'gi'