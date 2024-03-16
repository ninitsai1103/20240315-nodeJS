import ejs from "ejs";
import {readFileSync} from "fs";
import {resolve} from "path";
const __dirname = import.meta.dirname

let user;
// user = {
//     name: "Ruby Gonzalez",
//     img: "https://randomuser.me/api/portraits/women/12.jpg",
// }

// if (user){
//     console.log(`
//     <img src = "${user.img}"><span>${user.name}</span>
//     <button>登出</button>
//     `);
// }else {
//     console.log(`<button>登入</button><button>註冊</button>`);
// }

// const result = ejs.render(`
// <% if (user){ %>
// <img src = "<%=user.img%>>"><span><%=user.name%></span>
// <button>登出</button>
// <% }else { %>
// <button>登入</button><button>註冊</button>
// <% } %>
// `, {user})

const template = readFileSync(resolve(__dirname, "template03.html")).toString();
const result = ejs.render(template, {user})


console.log(result);