import express from "express";
const router = express.Router();

// exemplo de rota mínima
router.post("/send-reminders", (req, res) => {
    res.json({ message: "Cron job interno executado!" });
});

export default router;
