// app.js
const express = require('express');
const fs = require('fs');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Middleware for logging
app.use((req, res, next) => {
    const logStream = fs.createWriteStream('requests.log', { flags: 'a' });
    logStream.write(`${new Date().toISOString()} - ${req.method} ${req.url}\n`);
    next();
});

// Middleware for parsing JSON body
app.use(express.json());

// Routes
app.use('/books', bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
