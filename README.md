# OCR Analytics Application

This application provides Optical Character Recognition (OCR) capabilities using Azure's Computer Vision API. Users can upload images and extract text content from them.

## Features
- Image upload and preview
- Text extraction from images using Azure OCR
- Real-time text display with proper formatting
- Simple and intuitive user interface

## Prerequisites
- Node.js (v14 or higher)
- Azure account with Computer Vision resource
- Azure API key and endpoint

## Project Structure 
ocr-analytics/
├── backend/
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── routes/
│ │ └── app.js
│ ├── .env
│ └── package.json
└── frontend/
├── src/
│ ├── components/
│ └── ...
└── package.json

## Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=8000
AZURE_ENDPOINT=https://your-resource-name.cognitiveservices.azure.com
AZURE_SUBSCRIPTION_KEY=your-subscription-key
```

4. Replace the Azure credentials with your own from Azure Portal.

### Frontend Setup
1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the backend server:
```bash
cd backend
npm run dev
```
The backend will run on http://localhost:8000

2. In a new terminal, start the frontend:
```bash
cd frontend
npm start
```
The frontend will run on http://localhost:3000

## How to Use

1. Open http://localhost:3000 in your browser
2. Click "Select Image" to upload an image
3. Click "OCR Analyze" to process the image
4. View the extracted text in the results section

## Testing the Backend
You can test the backend API using curl:
```bash
curl -X POST http://localhost:8000/api/ocr/analyze \
-F "image=@path/to/your/image.jpg" \
| json_pp
```

## Technologies Used
- Frontend: React.js
- Backend: Node.js with Express
- OCR: Azure Computer Vision API
- Image Processing: Multer
- HTTP Client: Axios

## Important Notes
- Make sure your Azure subscription is active
- Keep your API keys secure
- Supported image formats: JPEG, PNG, BMP, PDF
- Maximum image size: 4MB

## Error Handling
- The application includes error handling for:
  - Invalid image formats
  - Network errors
  - API limitations
  - Missing credentials

