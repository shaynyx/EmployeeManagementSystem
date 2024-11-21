const employeeModel = require('../models/employeeModel');

module.exports = {
  viewAllEmployees: async (req, res) => {
    try {
      const employees = await employeeModel.viewAllEmployees();
      res.status(200).json(employees);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  addEmployee: async (req, res) => {
    const { name, department_id, address } = req.body;
    try {
      await employeeModel.addEmployee(name, department_id, address);
      res.status(201).json({ message: 'Employee added successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getEmployeeByFilters: async (req, res) => {
    const { name, department } = req.query;
    try {
      const employees = await employeeModel.getEmployeeByFilters(name, department);
      res.status(200).json(employees);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};
