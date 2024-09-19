import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchEmployees } from '../features/employees/employeesSlice';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Typography } from '@mui/material';
import './EmployeeList.css';

function EmployeeList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employees = useSelector(state => state.employees.list);

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  const handleEmployeeClick = (id) => {
    navigate(`/dashboard/${id}`);
  };

  return (
    <Container className="employee-list-container">
      <Typography variant="h4" gutterBottom>
        Select the employee from the provided list
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => (
              <TableRow key={employee.id} onClick={() => handleEmployeeClick(employee.id)} className="employee-row">
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.email}</TableCell>
                <TableCell>{employee.company.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default EmployeeList;