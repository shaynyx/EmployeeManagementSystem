import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Update with your backend URL
});

export const addDepartment = (name, description) => {
  return api.post('/departments/add', { name, description });
};

export const addEmployee = (name, department_id, address) => {
  return api.post('/employees/add', { name, department_id, address });
};

export const searchEmployees = (name, department) => {
  return api.get('/employees/search', {
    params: { name, department },
  });
};

export const getDepartments = () => {
  return api.get('/departments/view-all');
};
