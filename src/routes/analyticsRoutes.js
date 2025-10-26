import express from "express";
const router = express.Router();

// rota de teste
router.get("/metrics", (req, res) => {
    res.json({ message: "Analytics funcionando!" });
});

export default router;
