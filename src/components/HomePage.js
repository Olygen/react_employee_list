import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';

export default function HomePage({
  employees, // the array of employee objects, passed in as a prop
  setSelectedEmployee, // the function to update the selected employee state, passed in as a prop
  setEmployees, // the function to update the employees state, passed in as a prop
}) {
  return (
    <div className="home-page">
      <Header text="Employee Directory" />
      {/* the EmployeeList component is passed the array of employee objects and the handleEmployeeSelect function */}
      <SearchBar setEmployees={setEmployees} employees={employees} />
      <EmployeeList
        employees={employees}
        setSelectedEmployee={setSelectedEmployee}
      />
    </div>
  );
}