import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import DepartmentAddForm from './components/DepartmentAddForm';
import EmployeeAddForm from './components/EmployeeAddForm';
import EmployeeSearchForm from './components/EmployeeSearchForm';
import EmployeeList from './components/EmployeeList';
import { addDepartment, addEmployee, searchEmployees, getDepartments } from './services/api';
import { ToastContainer } from 'react-toastify'; // Import the ToastContainer
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [departments, setDepartments] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  useEffect(() => {
    getDepartments()
      .then((response) => setDepartments(response.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddDepartment = (name, description) => {
    addDepartment(name, description)
      .then(() => setDepartments([...departments, { name, description }]))
      .catch((err) => console.error(err));
  };

  const handleAddEmployee = (name, departmentId, address) => {
    addEmployee(name, departmentId, address)
      .then((response) => {
        setEmployees([...employees, response.data]);
      })
      .catch((err) => console.error(err));
  };

  const handleSearchEmployees = (name, department) => {
    searchEmployees(name, department)
      .then((response) => setFilteredEmployees(response.data))
      .catch((err) => console.error(err));
  };

  return (
    <Container fluid className='py-4'>
      <Row className='mb-4'>
        <Col>
          <h1 className='text-center'>Employee Management System</h1>
        </Col>
      </Row>

      <Row className='mb-4'>
        <Col md={6}>
          <Card className='border-primary'>
            <Card.Header className='bg-primary text-white'>
              <h4>Add Department</h4>
            </Card.Header>
            <Card.Body>
              <DepartmentAddForm addDepartment={handleAddDepartment} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className='border-success'>
            <Card.Header className='bg-success text-white'>
              <h4>Add Employee</h4>
            </Card.Header>
            <Card.Body>
              <EmployeeAddForm departments={departments} addEmployee={handleAddEmployee} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className='mb-4'>
        <Col>
          <Card className='border-info'>
            <Card.Header className='bg-info text-white'>
              <h4>Search Employees</h4>
            </Card.Header>
            <Card.Body>
              <EmployeeSearchForm searchEmployees={handleSearchEmployees} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Employee List - in the same container as the search */}
      <Row>
        <Col>
          <Card className='border-secondary'>
            <Card.Header className='bg-secondary text-white'>
              <h4>Employee List</h4>
            </Card.Header>
            <Card.Body>
              <EmployeeList employees={filteredEmployees.length ? filteredEmployees : employees} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
