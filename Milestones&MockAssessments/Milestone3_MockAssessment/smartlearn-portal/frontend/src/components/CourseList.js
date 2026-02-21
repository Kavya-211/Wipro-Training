//Userstory B1 and UserstoryB2
import React, { useEffect, useState } from "react";

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then(res => res.json())
      .then(data => {
        setCourses(data.data);
        setLoading(false);
      })
      .catch(() => {
        alert("Error fetching courses");
        setLoading(false);
      });
  }, []);

  const enrollCourse = async (courseId) => {
    try {
      const response = await fetch("http://localhost:5000/api/enroll", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: "U1",
          courseId
        })
      });

      const data = await response.json();

      if (response.status === 201) {
        alert("Enrollment Successful");
        setEnrolledCourses([...enrolledCourses, courseId]);
      } else {
        alert(data.message);
      }

    } catch (error) {
      alert("Network Error");
    }
  };

  if (loading) return <h2>Loading...</h2>;

  return (
    <div>
      <h2>Course Catalog</h2>

      {courses.map(course => (
        <div key={course.courseId} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
          <h3>{course.title}</h3>
          <p>Category: {course.category}</p>
          <p>Price: ₹{course.price}</p>
          <button onClick={() => enrollCourse(course.courseId)}>
            Enroll Now
          </button>
        </div>
      ))}

      <h2>Enrolled Courses</h2>
      {enrolledCourses.map(id => (
        <p key={id}>{id}</p>
      ))}
    </div>
  );
}

export default CourseList;