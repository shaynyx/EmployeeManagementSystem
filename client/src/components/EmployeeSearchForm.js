import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const EmployeeSearchForm = ({ searchEmployees }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    searchEmployees(name, department);
  };

  return (
    <div>
      <h3>Search Employees</h3>
      <Form onSubmit={handleSubmit}>
        <InputGroup className='mb-3'>
          <Form.Control type='text' placeholder='Employee Name' value={name} onChange={(e) => setName(e.target.value)} />
        </InputGroup>
        <InputGroup className='mb-3'>
          <Form.Control type='text' placeholder='Department' value={department} onChange={(e) => setDepartment(e.target.value)} />
        </InputGroup>
        <Button variant='primary' type='submit'>
          Search
        </Button>
      </Form>
    </div>
  );
};

export default EmployeeSearchForm;
