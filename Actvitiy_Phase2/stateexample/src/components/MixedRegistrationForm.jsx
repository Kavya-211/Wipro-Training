import { useRef, useState } from "react";
function MixedRegistrationForm() {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [errors, setErrors] = useState({});
  const validate = () => {
    const errors = {};
    let isValid = true;
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (!firstName || !/^[a-zA-Z]+$/.test(firstName)) {
      isValid = false;
      errors.firstName = "Enter valid first name";
    }
    if (!lastName || !/^[a-zA-Z]+$/.test(lastName)) {
      isValid = false;
      errors.lastName = "Enter valid last name";
    }
    const emailPattern =
      /^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)*@([a-z][a-zA-Z0-9-]*)\.[a-z]+(\.[a-z]+)?$/;
    if (!email || !emailPattern.test(email)) {
      isValid = false;
      errors.email = "Invalid email format";
    }
    const passPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/;
    if (!password || !passPattern.test(password)) {
      isValid = false;
      errors.password = "Password pattern incorrect";
    }
    setErrors(errors);
    return isValid;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Registration Successful");
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };
  return (
    <div className="container-div">
      <h2>Employee Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input ref={firstNameRef} />
          {errors.firstName && <span style={{ color: "red" }}>{errors.firstName}</span>}
        </div>
        <div>
          <label>Last Name:</label>
          <input ref={lastNameRef} />
          {errors.lastName && <span style={{ color: "red" }}>{errors.lastName}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input ref={emailRef} />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <label>Password:</label>
          <input type="password" ref={passwordRef} />
          {errors.password && <span style={{ color: "red" }}>{errors.password}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default MixedRegistrationForm;