import EmployeeListItem from './EmployeeListItem';

export default function EmployeeList({ employees, setSelectedEmployee }) {
  const handleClick = (id) => {
    console.log('Clicked ID:', id);
    setSelectedEmployee(employees.find((employee) => employee.id === id));
  };

  return (
    <div className="employee-list">
      {employees.length &&
        employees.map((employee, idx) => {
          return (
            <EmployeeListItem
              key={idx}
              {...employee}
              handleClick={handleClick}
            />
          );
        })}
    </div>
  );
}