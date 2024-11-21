const departmentModel = require('../models/departmentModel');

module.exports = {
  viewAllDepartments: async (req, res) => {
    try {
      const departments = await departmentModel.viewAllDepartments();
      res.status(200).json(departments);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  addDepartment: async (req, res) => {
    const { name, description } = req.body;
    try {
      departmentModel.addDepartment(name, description);

      res.status(201).json({ message: 'Department added successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
