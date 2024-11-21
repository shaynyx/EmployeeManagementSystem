import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmployeeAddForm = ({ departments = [], addEmployee }) => {
  const [name, setName] = useState('');
  const [departmentId, setDepartmentId] = useState(''); // Keep as string, parse later
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure departmentId is a valid numeric ID before sending to backend
    const numericDepartmentId = parseInt(departmentId, 10);

    if (isNaN(numericDepartmentId) || numericDepartmentId === '') {
      toast.error('Please select a valid department');
      return;
    }

    try {
      if (addEmployee) {
        await addEmployee(name, numericDepartmentId, address);
        toast.success('Employee added successfully');
        setDepartmentId('');
        setAddress('');
      } else {
        toast.error('Employee add function not available');
      }
    } catch (error) {
      toast.error('Failed to add employee');
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div>
      <h3>Add Employee</h3>
      <Form onSubmit={handleSubmit}>
        <InputGroup className='mb-3'>
          <Form.Control type='text' placeholder='Employee Name' value={name} onChange={(e) => setName(e.target.value)} required />
        </InputGroup>
        <InputGroup className='mb-3'>
          <Form.Select value={departmentId} onChange={(e) => setDepartmentId(e.target.value)} required>
            <option value=''>Select Department</option>
            {departments?.map((dep) => (
              <option key={`${dep.id}`} value={dep.id}>
                {dep.name}
              </option>
            ))}
          </Form.Select>
        </InputGroup>
        <InputGroup className='mb-3'>
          <Form.Control type='text' placeholder='Employee Address' value={address} onChange={(e) => setAddress(e.target.value)} required />
        </InputGroup>
        <Button variant='primary' type='submit'>
          Add Employee
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default EmployeeAddForm;
