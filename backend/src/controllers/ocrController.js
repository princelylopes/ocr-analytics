const axios = require('axios');
const config = require('../config/config');

const analyzeImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No image file provided' });
        }

        const imageBuffer = req.file.buffer;
        const baseUrl = config.azureEndpoint.replace(/\/$/, '');
        const url = `${baseUrl}/computervision/imageanalysis:analyze?api-version=2023-04-01-preview&features=read`;

        const response = await axios({
            method: 'post',
            url: url,
            headers: {
                'Ocp-Apim-Subscription-Key': config.azureSubscriptionKey,
                'Content-Type': 'application/octet-stream'
            },
            data: imageBuffer
        });

        // Add this line for debugging
        console.log('Azure Response:', response.data);

        // Check if we have the readResult in the response
        if (!response.data || !response.data.readResult) {
            throw new Error('Invalid response format from Azure API');
        }

        const formattedText = response.data.readResult.content
            .split('\n')
            .filter(line => line.trim() !== '')
            .join('\n');

        const ocrResult = {
            OCRCategories: formattedText
        };

        // Add this line for debugging
        console.log('Sending response:', ocrResult);

        res.json(ocrResult);

    } catch (error) {
        console.error('Error analyzing image:', error);
        res.status(500).json({ 
            error: 'Error processing image',
            details: error.message
        });
    }
};

module.exports = {
    analyzeImage
};
