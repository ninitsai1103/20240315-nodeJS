import express from "express";
import {resolve, extname} from "path";
import multer from "multer";
import {renameSync} from "fs";
import {rename} from "fs/promises";

const __dirname = import.meta.dirname

const app = express();

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"))

app.use("/bs", express.static(resolve(__dirname, "node_modules/bootstrap/dist")));
app.use("/jq", express.static(resolve(__dirname, "node_modules/jquery/dist")));
app.use(express.static(resolve(__dirname, "public")))

const upload = multer({dest: resolve(__dirname, "public", "uploads")});

app.get("/", (req, res) => {
    res.send("首頁")
})

app.get("/form", (req, res) => {
    res.render("form1")
})

app.get("/form2", (req, res) => {
    res.render("form2")
})

app.get("/form2-2", (req, res) => {
    res.render("form2-2")
})

app.post("/upload1", upload.single("myFile"), (req, res) => {
    // res.send("處裡檔案上傳")
    let timestamp = Date.now();
    // new Date().getTime();瀏覽器的JS的時間戳記寫法
    // 原始檔案名稱 req.file.originalname: "Pc2401260932.jpg"
    let newName = `${timestamp}${extname(req.file.originalname)}`
    // 搬移檔案名字改為時間戳記
    renameSync(req.file.path, resolve(__dirname, "public", "uploads", newName));
    req.body.myFile = newName;
    res.json({body: req.body})
})

// 支援三個檔案上傳
app.post("/upload2", upload.array("myFile", 3), (req, res) => {
    let myFiles = [];
    req.files.forEach(file => {
        let newName = `${file.filename}${extname(file.originalname)}`
        // console.log(newName);
        myFiles.push(newName)   
        rename(file.path, resolve(__dirname, "public", "uploads", newName));
    })
    req.body.myFiles = myFiles;
    res.json({body: req.body})
})

app.post("/upload2-2", upload.array("myFile[]", 3), (req, res) => {
    let myFiles = [];
    req.files.forEach(file => {
        let newName = `${file.filename}${extname(file.originalname)}`
        // console.log(newName);
        myFiles.push(newName)   
        rename(file.path, resolve(__dirname, "public", "uploads", newName));
    })
    req.body.myFiles = myFiles;
    res.json({body: req.body})
})

app.listen(3000, () => {
    console.log("伺服器啟動於 http://localhost:3000");
})