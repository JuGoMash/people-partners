import { RequestHandler } from "express";
import { Vacancy, VacancyRequest } from "@shared/api";
import * as fs from "fs";
import * as path from "path";

const dataDir = path.join(process.cwd(), "data");
const vacanciesFile = path.join(dataDir, "vacancies.json");

// Ensure data directory exists
function ensureDataDir() {
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Initialize default vacancies if file doesn't exist
function initializeDefaultVacancies(): Vacancy[] {
  return [
    {
      id: "1",
      title: "Senior HR Consultant",
      location: "Johannesburg",
      type: "full-time",
      description:
        "Experienced HR professional with 5+ years in consulting. Strong knowledge of labour law and ability to manage multiple client engagements.",
      requirements: [
        "Bachelor's degree in HR or related field",
        "5+ years HR consulting experience",
        "Knowledge of SA labour law",
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: "2",
      title: "Labour Relations Officer",
      location: "Johannesburg",
      type: "full-time",
      description:
        "Proactive professional to support labour relations matters, disciplinary processes, and employee grievances with detailed documentation.",
      requirements: [
        "3+ years experience in labour relations",
        "Strong writing and documentation skills",
        "Excellent organizational abilities",
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ];
}

// Read vacancies from file
function readVacancies(): Vacancy[] {
  ensureDataDir();
  if (!fs.existsSync(vacanciesFile)) {
    const defaults = initializeDefaultVacancies();
    writeVacancies(defaults);
    return defaults;
  }
  try {
    const data = fs.readFileSync(vacanciesFile, "utf-8");
    return JSON.parse(data);
  } catch {
    const defaults = initializeDefaultVacancies();
    writeVacancies(defaults);
    return defaults;
  }
}

// Write vacancies to file
function writeVacancies(vacancies: Vacancy[]): void {
  ensureDataDir();
  fs.writeFileSync(vacanciesFile, JSON.stringify(vacancies, null, 2));
}

export const handleGetVacancies: RequestHandler = (req, res) => {
  try {
    const vacancies = readVacancies();
    res.json({ vacancies, total: vacancies.length });
  } catch (error) {
    console.error("Error fetching vacancies:", error);
    res.status(500).json({ error: "Failed to fetch vacancies" });
  }
};

export const handleGetVacancy: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const vacancies = readVacancies();
    const vacancy = vacancies.find((v) => v.id === id);

    if (!vacancy) {
      res.status(404).json({ error: "Vacancy not found" });
      return;
    }

    res.json(vacancy);
  } catch (error) {
    console.error("Error fetching vacancy:", error);
    res.status(500).json({ error: "Failed to fetch vacancy" });
  }
};

export const handleCreateVacancy: RequestHandler = (req, res) => {
  try {
    const { title, location, type, description, requirements } =
      req.body as VacancyRequest;

    // Validation
    if (!title || !location || !type || !description || !requirements) {
      res.status(400).json({
        success: false,
        message:
          "Missing required fields: title, location, type, description, requirements",
      });
      return;
    }

    const vacancy: Vacancy = {
      id: Date.now().toString(),
      title,
      location,
      type,
      description,
      requirements,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    const vacancies = readVacancies();
    vacancies.push(vacancy);
    writeVacancies(vacancies);

    res.status(201).json({
      success: true,
      message: "Vacancy created successfully",
      vacancy,
    });
  } catch (error) {
    console.error("Error creating vacancy:", error);
    res.status(500).json({
      success: false,
      message: "Failed to create vacancy",
    });
  }
};

export const handleUpdateVacancy: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    const { title, location, type, description, requirements } =
      req.body as VacancyRequest;

    let vacancies = readVacancies();
    const index = vacancies.findIndex((v) => v.id === id);

    if (index === -1) {
      res.status(404).json({ error: "Vacancy not found" });
      return;
    }

    vacancies[index] = {
      ...vacancies[index],
      title: title || vacancies[index].title,
      location: location || vacancies[index].location,
      type: type || vacancies[index].type,
      description: description || vacancies[index].description,
      requirements: requirements || vacancies[index].requirements,
      updatedAt: new Date().toISOString(),
    };

    writeVacancies(vacancies);

    res.json({
      success: true,
      message: "Vacancy updated successfully",
      vacancy: vacancies[index],
    });
  } catch (error) {
    console.error("Error updating vacancy:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update vacancy",
    });
  }
};

export const handleDeleteVacancy: RequestHandler = (req, res) => {
  try {
    const { id } = req.params;
    let vacancies = readVacancies();
    const initialLength = vacancies.length;

    vacancies = vacancies.filter((v) => v.id !== id);

    if (vacancies.length === initialLength) {
      res.status(404).json({ error: "Vacancy not found" });
      return;
    }

    writeVacancies(vacancies);
    res.json({ success: true, message: "Vacancy deleted" });
  } catch (error) {
    console.error("Error deleting vacancy:", error);
    res.status(500).json({ error: "Failed to delete vacancy" });
  }
};
