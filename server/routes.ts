// server/routes.ts
import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertDemoRequestSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import { sendLeadEmail } from "./utils/mailer";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/demo-requests", async (req, res) => {
    try {
      const validatedData = insertDemoRequestSchema.parse(req.body);

      // ✅ Respond instantly to frontend
      res.json({
        success: true,
        message: "Demo request received! We'll contact you shortly.",
      });

      // ✅ Send email in background (no await)
      sendLeadEmail(validatedData).catch((err) => {
        console.error("Background email send failed:", err.message);
      });

    } catch (error: any) {
      console.error("Error handling demo request:", error);

      if (error.name === "ZodError") {
        const validationError = fromError(error);
        return res.status(400).json({
          message: validationError.message,
          errors: error.errors,
        });
      }

      // Still send a proper response if validation fails
      res.status(500).json({
        message: "Failed to handle demo request",
        error: error.message,
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
