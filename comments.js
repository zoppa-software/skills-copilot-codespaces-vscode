// Create web server
// Import express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create web server
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database
const comments = [
  { username: 'tj', text: 'This is a comment' },
  { username: 'tj', text: 'This is *another* comment' },
];

// Route handlers
app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.send(comment);
});

// Start web server
app.listen(3001, () => {
  console.log('Web server listening on port 3001');
});