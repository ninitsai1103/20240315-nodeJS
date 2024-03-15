import express from "express";

const router = express.Router();

router.get("", (req, res) => {
    res.send("產品list頁面");
})

router.get("/:id", (req, res) => {
    res.send("產品詳細頁面");
})

export default router;