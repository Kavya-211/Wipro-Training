import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 shadow">
      <div className="container-fluid">

        <div
          className="d-flex align-items-center"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img src="/Bank.png" width="60" alt="logo" />
          <span className="ms-2 fs-4 fw-bold text-warning">
            MyFin <span className="text-white">Bank</span>
          </span>
        </div>

        <div>
          {role ? (
            <button className="btn btn-outline-light" onClick={logout}>
              Logout
            </button>
          ) : (
            <button
              className="btn btn-warning"
              onClick={() => navigate("/auth")}
            >
              Login
            </button>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
