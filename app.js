const express = require('express');
const path = require('path');
const app = express();
const heroRoutes = require('./src/routes/heroRoutes');
const errorHandler = require('./src/middleware/errorHandler');

// Middleware til at parse JSON
app.use(express.json());

// Server statiske filer fra public mappen (f.eks. index.html)
app.use(express.static(path.join(__dirname, 'public')));

// Brug ruterne for heltene
app.use('/heroes', heroRoutes);

// Simpel GET på rod-URL'en
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Server HTML-filen
});

// Fejlhåndtering - placeret efter ruterne for at fange fejl
app.use(errorHandler);

module.exports = app;
