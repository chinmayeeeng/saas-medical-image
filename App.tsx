import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ImageViewer from "./components/ImageViewer";
import AnnotationTool from "./components/AnnotationTool";
import MetadataViewer from "./components/MetadataViewer";
import Home from "./pages/Home";
import Viewer from "./pages/Viewer";
import About from "./pages/About";

// Import the styles
import "./styles/globals.css"; // Global custom styles
import "./styles/tailwind.css"; // Tailwind CSS styles

// Import utilities
import { uploadImage, fetchDicomMetadata } from "./utils/api";
import { parseDicomFile, calculateRealWorldDistance } from "./utils/dicomUtils";

const App: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [metadata, setMetadata] = useState<any>(null);

  // Handle file upload and parse DICOM file
  const handleFileUpload = async (file: File) => {
    setUploadedFile(file);

    // Parse the file locally
    try {
      const parsedMetadata = await parseDicomFile(file);
      setMetadata(parsedMetadata);
      console.log("Parsed Metadata:", parsedMetadata);
    } catch (error) {
      console.error("Error parsing DICOM file:", error);
    }

    // Upload the file to the server
    try {
      const uploadResponse = await uploadImage(file);
      console.log("Upload Response:", uploadResponse);

      // Fetch metadata from the server (if applicable)
      const serverMetadata = await fetchDicomMetadata(uploadResponse.fileId);
      console.log("Server Metadata:", serverMetadata);
    } catch (error) {
      console.error("Error uploading file or fetching metadata:", error);
    }
  };

  return (
    <Router>
      <div className="bg-background text-textPrimary min-h-screen flex flex-col">
        {/* Header component (common across all pages) */}
        <Header />

        <main className="flex-grow container mx-auto p-4">
          {/* Define routes for different pages */}
          <Routes>
            {/* Home Page */}
            <Route
              path="/"
              element={
                <Home />
              }
            />

            {/* Viewer Page */}
            <Route
              path="/viewer"
              element={
                <div className="space-y-6">
                  <ImageViewer imageUrl="/path-to-image.png" />
                  <AnnotationTool />
                  {metadata && (
                    <MetadataViewer metadata={metadata} />
                  )}
                </div>
              }
            />

            {/* About Page */}
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        {/* Footer component (common across all pages) */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
