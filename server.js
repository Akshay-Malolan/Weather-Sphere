require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios'); // Replace node-fetch with axios
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Replace the hardcoded key with an environment variable in production for security.
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || "AIzaSyDg6yDJ78UbhbAV8396R2aEno0t6HL08h8";

app.post('/api/ai-suggestions', async (req, res) => {
  const { location, weather, temp } = req.body;
  
  if (!location || !weather || !temp) {
    return res.status(400).json({ error: 'Missing required parameters: location, weather, or temp' });
  }
  
  try {
    // More detailed logging to debug the issue
    console.log("Received request for:", location, weather, temp);
    
    // Enhanced prompt with more specific instructions
    const promptText = `Suggest 10 places to visit in or near ${location} during ${weather} weather with a temperature of ${temp}°C. 
    Be specific to the actual weather conditions (${weather}) and temperature (${temp}°C).
    For each suggestion, include a brief reason why it's suitable for the current weather.
    Format your response as JSON with a "suggestions" array containing objects with "name", "description", and "activityType" (indoor/outdoor) fields.
    Ensure the response is valid JSON.`;
    
    // Match EXACTLY the working structure from route.js
    const requestBody = {
      contents: [{ 
        role: "user", 
        parts: [{ text: promptText }] 
      }]
    };
    
    console.log("Sending request to Gemini API");
    
    // Update to use axios instead of fetch
    const geminiResponse = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent",
      requestBody,
      {
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY
        }
      }
    );
    
    console.log("Received response from Gemini API:", geminiResponse.status);
    
    // Axios puts the response in data property, not using .json()
    const data = geminiResponse.data;
    console.log("Successfully parsed Gemini response");
    
    // Process the response in the format we get from Gemini
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
    res.json({ choices: [{ message: { content: text } }] });
    
  } catch (error) {
    console.error('Error in AI suggestions route:', error);
    
    // Handle axios errors which may have response data in a different format
    if (error.response) {
      // The request was made and the server responded with a status code outside of 2xx
      console.error("Gemini API Error:", error.response.data);
      return res.status(error.response.status).json({ 
        error: error.response.data.error?.message || "Failed to fetch suggestions from Gemini API" 
      });
    }
    
    res.status(500).json({ 
      error: `Server error: ${error.message}`,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'web.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
