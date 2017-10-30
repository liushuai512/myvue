// import有声明的功能
//如果导出时采用的时一个个导出，导入时要使用* as 语法或者对象的解构
import {b,str,a} from './a.js'

import * as zfpx from './b.js';

console.log(hlg.hlg1);
console.log(hlg.hlg2);
console.log(hlg.hlg3);
console.log(hlg.hlg4);

//默认导出后 起名字可以随意使用
import c from './c.js';
console.log(c);
/*
let {str,a:b} = {str:'我很帅',a:1};*/
