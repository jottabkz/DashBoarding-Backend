import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export const sendEmail = async (to, subject, text, html) => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const info = await transporter.sendMail({
            from: `"DashBoarding!" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
            html,
        });

        return { success: true, info };
    } catch (error) {
        console.log("Erro ao enviar email:", error);
        return { success: false, error };
    }
};