import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import paymentsRoutes from "./routes/paymentsRoutes.js";
import uploadsRoutes from "./routes/uploadsRoutes.js";
import emailsRoutes from "./routes/emailsRoutes.js";
import notificationsRoutes from "./routes/notificationsRoutes.js";
import reportsRoutes from "./routes/reportsRoutes.js";
import integrationsRoutes from "./routes/integrationsRoutes.js";
import webhooksRoutes from "./routes/webhooksRoutes.js";
import analyticsRoutes from "./routes/analyticsRoutes.js";
import cronRoutes from "./routes/cronRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/payments", paymentsRoutes);
app.use("/api/uploads", uploadsRoutes);
app.use("/api/emails", emailsRoutes);
app.use("/api/notifications", notificationsRoutes);
app.use("/api/reports", reportsRoutes);
app.use("/api/integrations", integrationsRoutes);
app.use("/api/webhooks", webhooksRoutes);
app.use("/api/analytics", analyticsRoutes);
app.use("/api/cron", cronRoutes);

export default app;
