// server/index.ts
import express from "express";
import cors from "cors";
import path from "path";
import dotenv from "dotenv";
import { registerRoutes } from "./routes"; // ✅ Import your route setup

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend
const __dirnamePath = path.resolve();
const frontendPath = path.join(__dirnamePath, "dist", "public");
app.use(express.static(frontendPath));

// ✅ Register API routes (demo requests, etc.)
await registerRoutes(app);

// ✅ Fallback for SPA routes
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});