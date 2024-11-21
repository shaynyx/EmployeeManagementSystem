const db = require('../config/db');

module.exports = {
  viewAllEmployees: async () => {
    const [rows] = await db.query('SELECT * FROM Employee');
    return rows;
  },

  addEmployee: async (name, departmentId, address) => {
    const query = `INSERT INTO Employee (name, department_id, address) VALUES (?, ?, ?)`;
    await db.query(query, [name, departmentId, address]);
  },
  getEmployeeByFilters: async (name, departmentName) => {
    let query = `
      SELECT e.id, e.name, e.address, d.name AS department_name
      FROM employee e
      JOIN department d ON e.department_id = d.id
      WHERE 1=1`; // This ensures the query is always valid, even if no filters are provided

    const queryParams = [];

    // Add name filter if provided
    if (name) {
      query += ` AND e.name LIKE ?`; // ILIKE for case-insensitive partial match
      queryParams.push(`%${name}%`);
    }

    if (departmentName) {
      query += ` AND d.name LIKE ?`;
      queryParams.push(`%${departmentName}%`);
    }

    const [rows] = await db.query(query, queryParams);
    return rows;
  },
};
