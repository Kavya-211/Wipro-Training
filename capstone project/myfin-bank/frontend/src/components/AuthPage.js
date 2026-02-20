import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthPage({ setRole }) {

  const [isRegister, setIsRegister] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    deposit: 600
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  //  Validation 
  const validate = () => {
    let newErrors = {};

    if (isRegister && !form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (isRegister) {
      if (!form.deposit) {
        newErrors.deposit = "Deposit is required";
      } else if (Number(form.deposit) !== 600) {
        newErrors.deposit = "Please deposit 600 rupees to create account";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const url = isRegister
      ? "http://localhost:5000/api/auth/register"
      : "http://localhost:5000/api/auth/login";

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!isRegister && res.ok) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      setRole(data.role);
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "90vh",
        background: "linear-gradient(to right, #9db2f3, #95a5d8)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "100%",
          maxWidth: "420px",
          borderRadius: "12px",
        }}
      >
        <h3 className="text-center mb-4">
          {isRegister ? "Create Account" : "Welcome Back"}
        </h3>

        <form onSubmit={handleSubmit}>

          {isRegister && (
            <>
              <input
                type="text"
                className="form-control mb-1"
                placeholder="Full Name"
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
              {errors.name && (
                <div className="text-danger mb-2" style={{ fontSize: "13px" }}>
                  {errors.name}
                </div>
              )}

              <input
                type="number"
                className="form-control mb-1"
                placeholder="Deposit Amount (Must be Rs.600)"
                onChange={(e) =>
                  setForm({ ...form, deposit: Number(e.target.value) })
                }
              />
              {errors.deposit && (
                <div className="text-danger mb-2" style={{ fontSize: "13px" }}>
                  {errors.deposit}
                </div>
              )}
            </>
          )}

          <input
            type="email"
            className="form-control mb-1"
            placeholder="Email Address"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          {errors.email && (
            <div className="text-danger mb-2" style={{ fontSize: "13px" }}>
              {errors.email}
            </div>
          )}

          <input
            type="password"
            className="form-control mb-1"
            placeholder="Password"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          {errors.password && (
            <div className="text-danger mb-3" style={{ fontSize: "13px" }}>
              {errors.password}
            </div>
          )}

          <button
            className={`btn w-100 ${
              isRegister ? "btn-primary" : "btn-success"
            }`}
          >
            {isRegister ? "Register" : "Login"}
          </button>
        </form>

        <p
          className="mt-3 text-center text-primary"
          style={{ cursor: "pointer", fontSize: "14px" }}
          onClick={() => {
            setErrors({});
            setIsRegister(!isRegister);
          }}
        >
          {isRegister
            ? "Already have an account? Login"
            : "New user? Create Account"}
        </p>

      </div>
    </div>
  );
}

export default AuthPage;
