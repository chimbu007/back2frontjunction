import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import { google } from "googleapis";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";


// Load environment variables
dotenv.config();

// Setup __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Nodemailer Configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 📩 Handle Contact Form Submission
app.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_RECEIVER,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");

    await saveToGoogleSheet({ name, email, phone, message });

    res.status(200).json({ success: "Form submitted and email sent successfully!" });
  } catch (error) {
    console.error("❌ Error sending email or saving to Google Sheet:", error);
    res.status(500).json({ error: "Failed to send email or save data." });
  }
});

// ✅ Save Data to Google Sheet
async function saveToGoogleSheet(data) {
  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(__dirname, "credentials.json"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  const sheetId = "1vkxoSegYjP68a3xwzRDTf4Ma4zn1Pkwrq3BoQScqylE";
  const range = "sheet1!A:E";

  const values = [
    [data.name, data.email, data.phone, data.message, new Date().toLocaleString()],
  ];

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values,
    },
  });

  console.log("✅ Data saved to Google Sheet.");
}

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});