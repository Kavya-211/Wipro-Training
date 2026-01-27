import { useEffect, useState } from "react";
import employeeStore from "../stores/EmployeeStore";
import { deleteEmployee } from "../actions/EmployeeActions";

const EmployeeList = () => {
  const [employees, setEmployees] = useState(
    employeeStore.getEmployees()
  );

  useEffect(() => {
    const updateEmployees = () => {
      setEmployees([...employeeStore.getEmployees()]);
    };

    employeeStore.addChangeListener(updateEmployees);

    return () => {
      employeeStore.removeChangeListener(updateEmployees);
    };
  }, []);

  return (
    <div>
      <h2>Employee List</h2>
      <ul>
        {employees.map((emp, index) => (
          <li key={index}>
            {emp.name} - {emp.role}
            <button onClick={() => deleteEmployee(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;
