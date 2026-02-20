import { useEffect, useState } from "react";
import { getCourses, addCourse, deleteCourse } from "./services/api";
import CourseList from "./components/CourseList";
import Button from "./components/Button";

function App() {
  const [courses, setCourses] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const data = await getCourses();
    setCourses(data);
  };

  const handleAdd = async () => {
    if (!name) return;
    const newCourse = await addCourse(name);
    setCourses([...courses, newCourse]);
    setName("");
  };

  const handleDelete = async (id) => {
    await deleteCourse(id);
    setCourses(courses.filter(c => c.id !== id));
  };

  return (
    <div>
      <h2>Course Tracker</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <Button text="Add Course" onClick={handleAdd} />
      <CourseList courses={courses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
