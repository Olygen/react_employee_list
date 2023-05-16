import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import EmployeePage from './components/EmployeePage';
import employeeData from './data';
import { useState } from 'react';

function App() {
  // State for all the employees passed as a prop 
  const [employees, setEmployees] = useState(employeeData);
  // State for the one employee selected by the user is passed as a prop 
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
      <BrowserRouter>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" 
            element={<HomePage employees={employees} 
            setSelectedEmployee={setSelectedEmployee} 
            setEmployees={setEmployees} />} />
            {/* <Route path="/employee/:id" element={<EmployeePage />} /> */}
            <Route path="/employee/:id" element={<EmployeePage employee={selectedEmployee} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

