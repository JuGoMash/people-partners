import { RequestHandler } from "express";
import { Client, ClientRequest } from "@shared/api";
import * as fs from "fs";
import * as path from "path";

const dataDir = path.join(process.cwd(), "data");
const clientsFile = path.join(dataDir, "clients.json");

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Initialize default clients if file doesn't exist
function initializeDefaultClients(): Client[] {
  return [
    {
      id: "1",
      name: "New Africa",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F1767ae7c4b504b479256eb8b0d95e4d0%2F17f0ba0242ca4a8aae7cfcbc85d899c3?format=webp&width=800&height=1200",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "2",
      name: "River Horse Consulting",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F1767ae7c4b504b479256eb8b0d95e4d0%2F378a1b1557a049ebabcdfe5c3ddd85c3?format=webp&width=800&height=1200",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "3",
      name: "Saifleet",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F1767ae7c4b504b479256eb8b0d95e4d0%2F34401f4548f045d392a9d88c8183a00e?format=webp&width=800&height=1200",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "4",
      name: "The Unclogged",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F1767ae7c4b504b479256eb8b0d95e4d0%2F58c4b6d2912842eea7ef3879df826a28?format=webp&width=800&height=1200",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "5",
      name: "Mimi Beauty",
      logo: "https://cdn.builder.io/api/v1/image/assets%2F1767ae7c4b504b479256eb8b0d95e4d0%2F60b6b09b63c0479ba5d41a8c0ef0c89d?format=webp&width=800&height=1200",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}

// Read clients from file
function readClients(): Client[] {
  ensureDataDir();
  if (!fs.existsSync(clientsFile)) {
    const defaults = initializeDefaultClients();
    writeClients(defaults);
    return defaults;
  }
  try {
    const data = fs.readFileSync(clientsFile, "utf-8");
    return JSON.parse(data);
  } catch {
    const defaults = initializeDefaultClients();
    writeClients(defaults);
    return defaults;
  }
}

// Write clients to file
function writeClients(clients: Client[]): void {
  ensureDataDir();
  fs.writeFileSync(clientsFile, JSON.stringify(clients, null, 2));
}

export const handleGetClients: RequestHandler = (req, res) => {
  try {
    const clients = readClients();
    res.json({ clients, total: clients.length });
  } catch (error) {
    console.error("Error fetching clients:", error);
    res.status(500).json({ error: "Failed to fetch clients" });
  }
};

export const handleGetClient: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const clients = readClients();
    const client = clients.find((c) => c.id === id);

    if (!client) {
      res.status(404).json({ error: "Client not found" });
      return;
    }

    res.json(client);
  } catch (error) {
    console.error("Error fetching client:", error);
    res.status(500).json({ error: "Failed to fetch client" });
  }
};

export const handleCreateClient: RequestHandler = (req, res) => {
  try {
    const { name, logo } = req.body as ClientRequest;

    // Validation
    if (!name || !logo) {
      res.status(400).json({
        success: false,
        message: "Missing required fields: name, logo",
      });
      return;
    }

    const client: Client = {
      id: Date.now().toString(),
      name,
      logo,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const clients = readClients();
    clients.push(client);
    writeClients(clients);

    res.status(201).json({
      success: true,
      message: "Client created successfully",
      client,
    });
  } catch (error) {
    console.error("Error creating client:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create client",
    });
  }
};

export const handleUpdateClient: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const { name, logo } = req.body as ClientRequest;

    let clients = readClients();
    const index = clients.findIndex((c) => c.id === id);

    if (index === -1) {
      res.status(404).json({ error: "Client not found" });
      return;
    }

    clients[index] = {
      ...clients[index],
      name: name || clients[index].name,
      logo: logo || clients[index].logo,
      updatedAt: new Date().toISOString(),
    };

    writeClients(clients);

    res.json({
      success: true,
      message: "Client updated successfully",
      client: clients[index],
    });
  } catch (error) {
    console.error("Error updating client:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update client",
    });
  }
};

export const handleDeleteClient: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    let clients = readClients();
    const initialLength = clients.length;

    clients = clients.filter((c) => c.id !== id);

    if (clients.length === initialLength) {
      res.status(404).json({ error: "Client not found" });
      return;
    }

    writeClients(clients);
    res.json({ success: true, message: "Client deleted" });
  } catch (error) {
    console.error("Error deleting client:", error);
    res.status(500).json({ error: "Failed to delete client" });
  }
};
