import { type DemoRequest, type InsertDemoRequest, type Newsletter, type InsertNewsletter } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createDemoRequest(request: InsertDemoRequest): Promise<DemoRequest>;
  getDemoRequests(): Promise<DemoRequest[]>;
  createNewsletterSignup(signup: InsertNewsletter): Promise<Newsletter>;
  getNewsletterSignups(): Promise<Newsletter[]>;
  isEmailSubscribed(email: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private demoRequests: Map<string, DemoRequest>;
  private newsletterSignups: Map<string, Newsletter>;

  constructor() {
    this.demoRequests = new Map();
    this.newsletterSignups = new Map();
  }

  async createDemoRequest(insertRequest: InsertDemoRequest): Promise<DemoRequest> {
    const id = randomUUID();
    const request: DemoRequest = {
      ...insertRequest,
      id,
      createdAt: new Date(),
    };
    this.demoRequests.set(id, request);
    return request;
  }

  async getDemoRequests(): Promise<DemoRequest[]> {
    return Array.from(this.demoRequests.values());
  }

  async createNewsletterSignup(insertSignup: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const signup: Newsletter = {
      ...insertSignup,
      id,
      createdAt: new Date(),
    };
    this.newsletterSignups.set(id, signup);
    return signup;
  }

  async getNewsletterSignups(): Promise<Newsletter[]> {
    return Array.from(this.newsletterSignups.values());
  }

  async isEmailSubscribed(email: string): Promise<boolean> {
    return Array.from(this.newsletterSignups.values()).some(
      (signup) => signup.email.toLowerCase() === email.toLowerCase()
    );
  }
}

export const storage = new MemStorage();
