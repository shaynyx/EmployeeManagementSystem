const express = require('express');
const employeeController = require('../controllers/employeeController');

const router = express.Router();

router.get('/view-all', employeeController.viewAllEmployees);
router.post('/add', employeeController.addEmployee);
router.get('/search', employeeController.getEmployeeByFilters);

router.get('/', (req, res) => {
  res.json({ message: 'Employee data' });
});

module.exports = router;
