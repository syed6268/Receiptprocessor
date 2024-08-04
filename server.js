const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const receiptsRouter = require('./routes/receipts');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// API routes
app.use('/receipts', receiptsRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend', 'build')));

// Catch all other routes and return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'build', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
