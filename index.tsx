import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";

// Import routes
import imageRoutes from "./routes/imageRoutes.js";
import dicomRoutes from "./routes/dicomRoutes.js";
import annotationRoutes from "./routes/annotationRoutes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(express.static(path.join(__dirname, "uploads")));

// API Routes
app.use("/api/images", imageRoutes);
app.use("/api/dicom", dicomRoutes);
app.use("/api/annotations", annotationRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: "Internal server error" });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
