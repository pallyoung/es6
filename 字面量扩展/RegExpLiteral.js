/**
*RegExpLiteral.js
**/

/*
*用u修饰符让正则表达式支持\uFFFF以上的字符，并且在正则表达式中支持unicode表达式
*/

console.log(/\u{61}/.test('a'));// false
console.log(/\u{61}/u.test('a')); // true

console.log(/a{2}/.test('aa')); // true
console.log(/a{2}/u.test('aa')); // true
console.log(/𠮷{2}/.test('𠮷𠮷')); // false
console.log(/𠮷{2}/u.test('𠮷𠮷')); // true