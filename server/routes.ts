import type { Express } from "express";
import { createServer, type Server } from "http";
import { insertDemoRequestSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";
import { sendLeadEmail } from "./utils/mailer"; // <- add this file next

export async function registerRoutes(app: Express): Promise<Server> {
  // POST /api/demo-requests
  app.post("/api/demo-requests", async (req, res) => {
    try {
      // ✅ Validate input using Zod
      const validatedData = insertDemoRequestSchema.parse(req.body);

      // ✅ Send email to admin
      await sendLeadEmail(validatedData);

      // ✅ Respond success
      res.json({
        success: true,
        message: "Demo request email sent successfully.",
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

      res.status(500).json({
        message: "Failed to send demo request email",
        error: error.message,
      });
    }
  });

  // You can remove or comment out newsletter routes completely
  // since admin doesn’t want any stored data

  const httpServer = createServer(app);
  return httpServer;
}
