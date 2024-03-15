import ejs from "ejs";
import {readFileSync} from "fs";
import {resolve} from "path";
const __dirname = import.meta.dirname

const blackpink = ["Jennie", "Jisoo", "Lisa", "Rosé"];

// let str = "<ul>";
// blackpink.forEach(name => {
//     str += `<li>${name}</li>`
// })
// str += "</ul>"

// const result = ejs.render(`
//     <ul>
//         <% blackpink.forEach(name => { %>
//             <li><%=name%></li>
//         <% }) %>
//     </ul>`,
//     { blackpink });

const template = readFileSync(resolve(__dirname, "template02.html")).toString();
const result = ejs.render(template, {blackpink})

console.log(result);