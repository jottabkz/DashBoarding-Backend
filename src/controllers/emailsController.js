import { sendEmail } from "../services/emailService.js";

export const send = async (req, res) => {
    const { to, subject, message } = req.body;

    if (!to || !subject || !message) {
        return res.status(400).json({ error: "Campos obrigatórios: to, subject, message" });
    }

    const result = await sendEmail(to, subject, message, `<p>${message}</p>`);

    if (!result.success) {
        return res.status(500).json({ error: "Erro ao enviar email", details: result.error?.message || "Erro desconhecido" });
    }

    return res.status(200).json({ message: "Email enviado com sucesso!", info: result.info });
}