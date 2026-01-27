import { useState } from "react";
import { addEmployee } from "../actions/EmployeeActions";

const EmployeeForm = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    addEmployee({ name, role });
    setName("");
    setRole("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default EmployeeForm;
