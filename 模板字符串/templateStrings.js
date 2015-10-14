/**
*templateStrings.js
*模板字符串
**/

/**
*1:用反引号{`}包裹
*2:支持单行和多行字符串
*3:支持插入表达式，表达式写在${}，花括号内。
**/

function greet (name) {
	return (`hello ${name}`);
}
console.log(greet("world"));

var templateString =  
					`<div>
						hello world
					</div>`;
console.log(templateString);

/**
*String.raw
*@description 返回未转义的模板字符串的内容(不转义反斜杠)
**/

var ts = `template\sstring${greet("world")}`

console.log(`template\nstring${greet("world")}`)
console.log(String.raw `template\nstring${greet("world")}`);//output:template\nstringhello world


console.log(String.raw({ raw: 'test' }, 0, 1));//output:t0e1st