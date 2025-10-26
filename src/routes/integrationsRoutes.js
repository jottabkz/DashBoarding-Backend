
import express from "express";
const router = express.Router();

router.get("/teste", (req, res) => res.json({ message: "OK" }));

export default router;
