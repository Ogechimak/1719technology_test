const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/submit-form', (req, res) => {
  console.log('Form data received:', req.body);
  res.status(200).send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});