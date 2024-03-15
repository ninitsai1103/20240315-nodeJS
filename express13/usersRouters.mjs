import express from "express";

const router = express.Router();

router.get("", (req, res) => {
    res.send("使用者list頁面");
})

router.get("/login", (req, res) => {
    res.send("使用者登入頁面");
})

router.get("/:id", (req, res) => {
    res.send("某使用者的頁面");
})

// 第二種方法
// router.get("/u/:id", (req, res) => {
//     res.send("某使用者的頁面");
// })
// router.get("/login", (req, res) => {
//     res.send("使用者登入頁面");
// })


router.post("/login", (req, res) => {
    res.send("使用者登入流程");
})

// 預設導出
export default router;