import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchEmployees } from '../features/employees/employeesSlice';
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
    <div className="employee-list-container">
      <h2>Select the employee from the provided list</h2>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} onClick={() => handleEmployeeClick(employee.id)} className="employee-row">
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;