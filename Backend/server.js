import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json());

// API Route
app.get("/", (req, res) => {
    res.json({ message: "Hello from Express backend!" });
});

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, "public")));

// Serve manifest and service worker
app.get("/manifest.json", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "manifest.json"));
});

app.get("/service-worker.js", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "service-worker.js"));
});

app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
});
