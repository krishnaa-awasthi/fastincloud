import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDemoRequestSchema, insertNewsletterSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/demo-requests", async (req, res) => {
    try {
      const validatedData = insertDemoRequestSchema.parse(req.body);
      const demoRequest = await storage.createDemoRequest(validatedData);
      res.json(demoRequest);
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        return res.status(400).json({ 
          message: validationError.message,
          errors: error.errors 
        });
      }
      res.status(500).json({ 
        message: "Failed to create demo request",
        error: error.message 
      });
    }
  });

  app.get("/api/demo-requests", async (_req, res) => {
    try {
      const requests = await storage.getDemoRequests();
      res.json(requests);
    } catch (error: any) {
      res.status(500).json({ 
        message: "Failed to retrieve demo requests",
        error: error.message 
      });
    }
  });

  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      
      const isSubscribed = await storage.isEmailSubscribed(validatedData.email);
      if (isSubscribed) {
        return res.status(400).json({ 
          message: "This email is already subscribed to our newsletter" 
        });
      }

      const newsletter = await storage.createNewsletterSignup(validatedData);
      res.json(newsletter);
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromError(error);
        return res.status(400).json({ 
          message: validationError.message,
          errors: error.errors 
        });
      }
      res.status(500).json({ 
        message: "Failed to subscribe to newsletter",
        error: error.message 
      });
    }
  });

  app.get("/api/newsletter", async (_req, res) => {
    try {
      const signups = await storage.getNewsletterSignups();
      res.json(signups);
    } catch (error: any) {
      res.status(500).json({ 
        message: "Failed to retrieve newsletter signups",
        error: error.message 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
