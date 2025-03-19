require('dotenv').config();

module.exports = {
    port: process.env.PORT || 8000,
    azureEndpoint: process.env.AZURE_ENDPOINT || 'https://your-resource-name.cognitiveservices.azure.com',
    azureSubscriptionKey: process.env.AZURE_SUBSCRIPTION_KEY || 'your-subscription-key'
}; 