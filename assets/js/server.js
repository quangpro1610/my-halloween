// Imports
const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, '../')));


app.get('/', (req, res) => { 
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

// Listen on Port 5000
app.listen(port, () => {
  console.info(`App listening on port ${port}`);
});
