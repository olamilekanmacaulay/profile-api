const express = require('express');

const app = express();
const PORT = process.env.PORT || 25099;

const CAT_FACTS_API = 'https://catfact.ninja/fact';
const API_TIMEOUT = 5000; // 5-second timeout

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
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), API_TIMEOUT);

      const response = await fetch(CAT_FACTS_API, {
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        const data = await response.json();
        catFact = data.fact;
      } else {
        console.warn(`Cat Facts API responded with status: ${response.status}`);
      }
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
  console.log(`Server running on http://localhost:${PORT}`);
});

