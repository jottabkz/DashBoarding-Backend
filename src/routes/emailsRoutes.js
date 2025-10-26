import express from "express";
import { send } from "../controllers/emailsController.js";

const router = express.Router();

router.post("/send", send);

export default router;