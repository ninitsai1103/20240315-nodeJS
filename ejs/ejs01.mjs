import ejs from "ejs";
import {readFileSync} from "fs";
import {resolve} from "path";
const __dirname = import.meta.dirname

const name = "Ni";
const str = "Hello world";

// console.log(name +", "+str);
// 樣板文字
// console.log(`${name}, ${str}`);
// const template = "<%= name %>, <%= str %>"
const template = readFileSync(resolve(__dirname, "template01.html")).toString();
const result = ejs.render(
    template,
    {
        // name: name,
        // str: str
        // 省略
        name,
        str
    }
)
console.log(result);