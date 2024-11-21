import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DepartmentAddForm = ({ addDepartment }) => {
  const [depName, setDepName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call addDepartment function passed as prop
      await addDepartment(depName, description);
      toast.success('Department added successfully!');
      setDepName('');
      setDescription('');
    } catch (error) {
      toast.error('Failed to add department');
      console.error('Error adding department:', error);
    }
  };

  return (
    <div>
      <h3>Add Department</h3>
      <Form onSubmit={handleSubmit}>
        <InputGroup className='mb-3'>
          <Form.Control placeholder='Department Name' value={depName} onChange={(e) => setDepName(e.target.value)} required />
        </InputGroup>
        <InputGroup className='mb-3'>
          <Form.Control as='textarea' rows={3} placeholder='Department Description' value={description} onChange={(e) => setDescription(e.target.value)} required />
        </InputGroup>
        <Button variant='primary' type='submit'>
          Add Department
        </Button>
      </Form>
      <ToastContainer /> {/* To display the toasts */}
    </div>
  );
};

export default DepartmentAddForm;
