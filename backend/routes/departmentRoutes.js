const express = require('express');
const departmentController = require('../controllers/departmentController');

const router = express.Router();

router.get('/view-all', departmentController.viewAllDepartments);
router.post('/add', departmentController.addDepartment);
router.get('/', (req, res) => {
  res.json({ message: 'Department data' });
});

module.exports = router;
