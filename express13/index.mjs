import express from "express";
import usersRouter from "./usersRouters.mjs";
import productsRouter from "./productsRouters.mjs";

const router = express();

router.get("/", (req, res) => {
    res.send("網頁首頁");

})

// 剪進usersRouters.mjs
// app.get("/users", (req, res) => {
//     res.send("使用者list頁面");
// })

// app.get("/users/:id", (req, res) => {
//     res.send("某使用者的頁面");
// })

// app.get("/users/login", (req, res) => {
//     res.send("使用者登入頁面");
// })

// app.post("/users/login", (req, res) => {
//     res.send("使用者登入流程");
// })
// 改為
router.use("/users", usersRouter);

// 剪進productsRouters.mjs
// router.get("/products", (req, res) => {
//     res.send("產品list頁面");
// })

// router.get("/products/:id", (req, res) => {
//     res.send("產品詳細頁面");
// })
// 改為
router.use("/products", productsRouter);

router.get("/search", (req, res) => {
    res.send("全站搜索");
})

router.listen(3000, () => {
    console.log("伺服器啟動於 http://localhost:3000");
})