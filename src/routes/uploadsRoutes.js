// Em cada arquivo de rota
import express from "express";
const router = express.Router();

// Adicione pelo menos uma rota de teste
router.get("/teste", (req, res) => res.json({ message: "OK" }));

export default router;
