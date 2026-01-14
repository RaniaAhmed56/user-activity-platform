const express = require('express');
const routes = require('./http/routes');
const env = require('../infrastructure/config/env');

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// Health check
app.get('/', (req, res) => {
  res.json({ message: 'User Activity Platform - API Service' });
});

// Error handling middleware (must come before 404 handler)
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

// 404 handler (must be last)
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found', message: 'The requested resource could not be found.' });
});

const start = async () => {
  try {
    app.listen(env.PORT, () => {
      console.log(`API Service running on port ${env.PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

module.exports = { app, start };
