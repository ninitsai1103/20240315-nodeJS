import express from "express";
import {resolve} from "path";
import bodyParser from "body-parser";
const __dirname = import.meta.dirname;

const app = express();

// parse application/x-www-form-urlencoded
// 解析form元素表單
// extend為解析多層物件\
// 下面是全域middleware寫法
// app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
// 解析json格式表單
// 下面是全域middleware寫法
// app.use(bodyParser.json())

// create application/json parser
// 解析form元素表單
// extend為解析多層物件\
// 下面是路由middleware寫法
// const jsonParser = bodyParser.json()
// bodyParser被express買走了
const jsonParser = express.json()


// create application/x-www-form-urlencoded parser
// parse application/json
// 解析json格式表單
// 下面是路由middleware寫法
// const urlencodedParser = bodyParser.urlencoded({ extended: false })
// bodyParser被express買走了
const urlencodedParser = express.urlencoded({ extended: false })

app.get("/", (req, res) => {
    res.send("網頁首頁");

})

app.get("/login", (req, res) => {
    res.sendFile(resolve(__dirname, "form.html"));

})

app.post("/login", urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send("送出流程");

})

app.listen(3000, () => {
    console.log("伺服器啟動於 http://localhost:3000");
})