import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465, // ✅ true for SSL, false for TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendLeadEmail(data: {
  name: string;
  email: string;
  company: string;
  phone?: string;
  message?: string;
}) {
  const mailOptions = {
    from: `"MQL Experts Website" <${process.env.SMTP_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: `New Lead on MQL Experts Website`,
    html: `
      <h2>New Lead Generated</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Phone:</strong> ${data.phone || "N/A"}</p>
      <p><strong>Message:</strong> ${data.message || "No message provided"}</p>
      <hr>
      <p>This lead was generated from the MQL Experts website form.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
