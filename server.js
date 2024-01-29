const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Define a route for handling the Mailchimp API request
app.post('/api/subscribe', async (req, res) => {
  const { email } = req.body;

  try {
    const response = await axios.post(
      'https://us21.api.mailchimp.com/3.0/lists/c220c4dce8/members',
      {
        email_address: email,
        status: 'subscribed',
      },
      {
        headers: {
          Authorization: 'auth 31ea5ab599dd4f5778bd6f8f4db244ab-us21',
          'Content-Type': 'application/json',
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Failed to subscribe to Mailchimp', error);
    res.status(500).json({ error: 'Failed to subscribe to Mailchimp' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
