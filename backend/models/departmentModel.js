const db = require('../config/db');

module.exports = {
  viewAllDepartments: async () => {
    const [rows] = await db.query('SELECT name, id FROM Department');
    return rows;
  },

  addDepartment: async (name, description) => {
    const query = 'INSERT INTO Department (name, description) VALUES (?, ?)';
    await db.query(query, [name, description]);
  },
};
