import express, { Request, Response } from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static frontend (from client/dist/public)
const __dirnamePath = path.resolve();
const frontendPath = path.join(__dirnamePath, "dist", "public");

app.use(express.static(frontendPath));

// --- API ROUTE ---
app.post("/api/contact", async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    // Respond immediately
    res.status(200).json({ success: true, message: "Message received!" });

    // Send mail in background
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact from ${name}`,
      text: message,
    });
  } catch (err) {
    console.error("Mail send error:", err);
  }
});

// --- Fallback for SPA ---
app.get("*", (req: Request, res: Response) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
