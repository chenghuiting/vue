//1.使用commonjs的模块化规范
const {add,mul}=require("./js/mathUtils")
console.log(add(20, 30));
console.log(mul(20, 30));

//2.使用ES6的模块化规范
import {name,age,height} from "./js/info"
console.log(name);
console.log(age);
console.log(height)

//依赖css文件
require('./css/noremal.css')
//依赖less文件
require('./css/special.less')

//往页面上写点文字，用于测试效果
document.writeln('<h2>你好</h2>>')