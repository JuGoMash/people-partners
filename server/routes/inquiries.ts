import { RequestHandler } from "express";
import { Inquiry, InquiryResponse } from "@shared/api";
import * as fs from "fs";
import * as path from "path";

const dataDir = path.join(process.cwd(), "data");
const inquiriesFile = path.join(dataDir, "inquiries.json");

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read inquiries from file
function readInquiries(): Inquiry[] {
  ensureDataDir();
  if (!fs.existsSync(inquiriesFile)) {
    return [];
  }
  try {
    const data = fs.readFileSync(inquiriesFile, "utf-8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

// Write inquiries to file
function writeInquiries(inquiries: Inquiry[]): void {
  ensureDataDir();
  fs.writeFileSync(inquiriesFile, JSON.stringify(inquiries, null, 2));
}

export const handleSubmitInquiry: RequestHandler = (req, res) => {
  try {
    const { name, email, phone, message, type } = req.body;

    // Basic validation
    if (!name || !email || !phone || !message) {
      res.status(400).json({
        success: false,
        message: "Missing required fields: name, email, phone, message",
      });
      return;
    }

    const inquiry: Inquiry = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      message,
      type: type || "general",
      createdAt: new Date().toISOString(),
    };

    const inquiries = readInquiries();
    inquiries.push(inquiry);
    writeInquiries(inquiries);

    const response: InquiryResponse = {
      success: true,
      message: "Inquiry submitted successfully",
      id: inquiry.id,
    };

    res.status(201).json(response);
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    res.status(500).json({
      success: false,
      message: "Failed to submit inquiry",
    });
  }
};

export const handleGetInquiries: RequestHandler = (req, res) => {
  try {
    const inquiries = readInquiries();
    res.json({ inquiries, total: inquiries.length });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    res.status(500).json({ error: "Failed to fetch inquiries" });
  }
};

export const handleGetInquiry: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const inquiries = readInquiries();
    const inquiry = inquiries.find((i) => i.id === id);

    if (!inquiry) {
      res.status(404).json({ error: "Inquiry not found" });
      return;
    }

    res.json(inquiry);
  } catch (error) {
    console.error("Error fetching inquiry:", error);
    res.status(500).json({ error: "Failed to fetch inquiry" });
  }
};

export const handleDeleteInquiry: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    let inquiries = readInquiries();
    const initialLength = inquiries.length;

    inquiries = inquiries.filter((i) => i.id !== id);

    if (inquiries.length === initialLength) {
      res.status(404).json({ error: "Inquiry not found" });
      return;
    }

    writeInquiries(inquiries);
    res.json({ success: true, message: "Inquiry deleted" });
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    res.status(500).json({ error: "Failed to delete inquiry" });
  }
};
