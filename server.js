const express = require('express');
const axios = require('axios'); // Import axios

const app = express();
const PORT = process.env.PORT || 3000;

const CAT_FACTS_API = 'https://catfact.ninja/fact';
const API_TIMEOUT = 5000;

const profileData = {
  email: 'olalekan.macaulay1@gmail.com',
  name: 'Olalekan Macaulay Michael',
  stack: 'Node.js/Express'
};

app.get('/me', async (req, res) => {
  try {
    let catFact = 'Cats have over 20 muscles that control their ears.'; // Default fact

    // Nested try-catch to gracefully handle external API failures
    try {
      // Use axios to fetch the cat fact with a timeout
      const response = await axios.get(CAT_FACTS_API, { timeout: API_TIMEOUT });
      catFact = response.data.fact;
      
    } catch (error) {
      console.error('Error fetching cat fact:', error.message);
      catFact = 'Unable to fetch a fresh cat fact at this moment.';
    }

    const responseData = {
      status: 'success',
      user: profileData,
      timestamp: new Date().toISOString(),
      fact: catFact
    };

    res.status(200).json(responseData);

  } catch (error) {
    // Safety net for any other server errors
    console.error('Critical error in /me endpoint:', error);
    res.status(500).json({
      status: 'error',
      message: 'An internal server error occurred.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

