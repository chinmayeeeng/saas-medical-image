# saas-medical-image
Overview
SaaS Medical Imaging is a web-based platform that provides tools for healthcare professionals to upload, view, and annotate medical images, including DICOM files. The application supports image manipulation, annotation, and metadata extraction, ensuring an efficient workflow for medical imaging tasks.

Features
Frontend:

Upload and view medical images (PNG/DICOM).
Annotate images with circles, rectangles, and other tools.
Adjust brightness, contrast, and other image properties.
View extracted metadata from DICOM files.
Backend:

API endpoints for image upload, DICOM metadata extraction, and annotation handling.
Supports file storage and manipulation using MongoDB and Express.
Database:

MongoDB for storing metadata and annotations.
Technologies Used
Frontend:

React.js
Tailwind CSS
Konva.js
Backend:

Node.js
Express.js
MongoDB
DICOM Parser
Sharp (for image manipulation)
Containerization:

Docker and Docker Compose
Prerequisites
Before setting up the project, ensure the following dependencies are installed:

Node.js (Version 16 or higher)
npm (Installed with Node.js)
Docker and Docker Compose
MongoDB (Optional if not using Docker)

Project Structure:saas-medical-imaging/                
│
├── public/                          
├── src/                             
│   ├── components/                 
│   │   ├── Header.tsx               
│   │   ├── Footer.tsx               
│   │   ├── ImageViewer.tsx          
│   │   ├── AnnotationTool.tsx       
│   │   └── MetadataViewer.tsx     
│   ├── pages/                       
│   │   ├── Home.tsx                 
│   │   ├── Viewer.tsx              
│   │   └── About.tsx                
│   ├── styles/                    
│   │   ├── globals.css              
│   │   └── tailwind.css             
│   ├── utils/                   
│   │   ├── api.ts                  
│   │   └── dicomUtils.ts            
│   ├── App.tsx                      
│   └── index.tsx                   
├── backend/                         
│   ├── controllers/                 
│   │   ├── imageController.js      
│   │   ├── dicomController.js       
│   │   └── annotationController.js  
│   ├── routes/                     
│   │   ├── imageRoutes.js           
│   │   ├── dicomRoutes.js           
│   │   └── annotationRoutes.js      
│   ├── utils/                      
│   │   ├── dicomParser.js           
│   │   └── imageProcessing.js     
│   ├── uploads/                     
│   ├── index.js                     
│   ├── Dockerfile                   
│   └── package.json                 
├── Dockerfile                       
├── docker-compose.yml               
├── README.md                        
└── .gitignore 

Setup Guide
Step 1: Clone the Repository
Step 2: Install Dependencies
Step 3: Configure Environment Variables
Step 4: Build and Run with Docker
