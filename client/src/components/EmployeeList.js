import React from 'react';

const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h3>Employee List</h3>
      <ul className='list-group'>
        {employees.map((employee) => (
          <li key={employee.id} className='list-group-item'>
            {employee.name} - {employee.department_name} - {employee.address}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
