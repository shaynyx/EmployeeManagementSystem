const express = require('express');
const bodyParser = require('body-parser');
const employeeRoutes = require('./routes/employeeRoutes');
const departmentRoutes = require('./routes/departmentRoutes');
const pool = require('./config/db');

const app = express();
const cors = require('cors');
app.use(cors());

app.use(bodyParser.json());

app.use('/api/employees', employeeRoutes);
app.use('/api/departments', departmentRoutes);

// Test DB connection
pool
  .query('SELECT 1')
  .then(() => {
    console.log('Database connection successful');
  })
  .catch((err) => {
    console.error('Database connection failed:', err);
  });

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
