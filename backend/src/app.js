const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const ocrRoutes = require('./routes/ocrRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/ocr', ocrRoutes);

// Error handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.get('/', (req, res) => {
    res.json({ message: 'Backend is working!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 