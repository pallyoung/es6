/**
*unicode.js
**/

/**
*增加对\uFFFF之后的字符的支持
*将码点放入花括号内，就能正确解读该字符。
**/
console.log("\u{20BB7}");//正确写法
console.log("\u20BB7");//如果不放在花括号内JavaScript会理解成“\u20BB+7”;
console.log("\u{20BB7}"==="\uD842\uDFB7");//output:true