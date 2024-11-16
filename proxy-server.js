const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Add this for enabling CORS if needed

const app = express();
const port = 4000;

// Middleware to allow cross-origin requests (if needed)
app.use(cors());

// Route to fetch the list of mutual funds
app.get('/api/mf', async (req, res) => {
  try {
    // Fetch mutual funds from an external API or database
    const response = await axios.get('https://api.mfapi.in/mf');
    
    // Check if the response contains data
    if (response.data && response.data.mutualFunds) {
      res.json(response.data.mutualFunds); // Send the list of mutual funds
    } else {
      res.status(404).json({ error: 'Mutual funds not found' });
    }
  } catch (error) {
    console.error('Error fetching mutual funds:', error.message);
    res.status(500).json({ error: 'Failed to fetch mutual funds' });
  }
});

// Route to fetch NAV history for a specific mutual fund
app.get('/api/mutualfund/:fundId/navhistory', async (req, res) => {
  const { fundId } = req.params;
  try {
    // Replace this with your actual API or data fetch logic for NAV history
    const navResponse = await axios.get(`https://api.mfapi.in/mf/${schemeCode}`);
    
    // Check if the response contains the expected data
    if (navResponse.data && navResponse.data.data) {
      res.json(navResponse.data.data); // Send only the NAV history data
    } else {
      res.status(404).json({ error: 'NAV data not found for this fund' });
    }
  } catch (error) {
    console.error('Error fetching NAV history:', error.message);
    res.status(500).json({ error: 'Failed to fetch NAV data from the API' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
