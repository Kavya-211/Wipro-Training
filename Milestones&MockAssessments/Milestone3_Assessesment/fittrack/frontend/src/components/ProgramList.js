import React, { useEffect, useState } from "react";
import { API_URL } from "../api";
import "../styles.css";

function ProgramList() {
  const [programs, setPrograms] = useState([]);
  const [enrolledPrograms, setEnrolledPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Fetch Programs
  useEffect(() => {
    fetch(`${API_URL}/api/programs`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setPrograms(data.data);
        } else {
          setError("Failed to load programs");
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Server Error");
        setLoading(false);
      });
  }, []);

  // Enroll Function
  const enroll = async (programId) => {
    setMessage("");
    setError("");

    try {
      const res = await fetch(`${API_URL}/api/enroll`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: "USR101",   
          programId: programId
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
      } else {
        setMessage("Enrollment Successful!");
        setEnrolledPrograms([
          ...enrolledPrograms,
          { userId: "USR101", programId: programId }
        ]);
      }

    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h1>FitTrack Programs</h1>

      {message && <div className="message" style={{ color: "green" }}>{message}</div>}
      {error && <div className="message" style={{ color: "red" }}>{error}</div>}

      {/* PROGRAM TABLE */}
      <table>
        <thead>
          <tr>
            <th>Program ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Level</th>
            <th>Price</th>
            <th>Enroll</th>
          </tr>
        </thead>
        <tbody>
          {programs.map((program) => (
            <tr key={program._id}>
              <td>{program.programId}</td>
              <td>{program.name}</td>
              <td>{program.category}</td>
              <td>{program.level}</td>
              <td>₹{program.price}</td>
              <td>
                <button onClick={() => enroll(program.programId)}>
                  Enroll
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* ENROLLED PROGRAMS TABLE */}
      <h2>Enrolled Programs</h2>

      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Program ID</th>
          </tr>
        </thead>
        <tbody>
          {enrolledPrograms.length === 0 ? (
            <tr>
              <td colSpan="2">No programs enrolled yet</td>
            </tr>
          ) : (
            enrolledPrograms.map((item, index) => (
              <tr key={index}>
                <td>{item.userId}</td>
                <td>{item.programId}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ProgramList;