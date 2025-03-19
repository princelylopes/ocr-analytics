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

## Quick Start

1. Clone the repository:
```bash
git clone <repository-url>
cd ocr-analytics
```

2. Install dependencies for both frontend and backend:
```bash
npm run install-all
```

3. Set up environment variables:
```bash
cd backend
cp .env.example .env
# Edit .env with your Azure credentials
```

4. Start both servers:
```bash
# From the root directory
npm start
```

The application will be running at:
- Frontend: http://localhost:3000
- Backend: http://localhost:8000

## Environment Variables
Create a `.env` file in the backend directory with:
```env
PORT=8000
AZURE_ENDPOINT=https://your-resource-name.cognitiveservices.azure.com
AZURE_SUBSCRIPTION_KEY=your-subscription-key
```

## Available Scripts
- `npm run install-all` - Install dependencies for frontend and backend
- `npm start` - Start both frontend and backend servers
- `npm run server` - Start only the backend server
- `npm run client` - Start only the frontend server
- `npm run build` - Build the frontend for production

## Project Structure
ocr-analytics/
├── backend/ # Express server
│ ├── src/
│ │ ├── config/
│ │ ├── controllers/
│ │ ├── routes/
│ │ └── app.js
│ ├── .env.example
│ └── package.json
├── frontend/ # React application
│ ├── src/
│ │ ├── components/
│ │ └── ...
│ └── package.json
├── .gitignore # Root gitignore
├── package.json # Root package.json
└── README.md # Documentation

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
