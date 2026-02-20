const CourseList = ({ courses, onDelete }) => {
  return (
    <ul>
      {courses.map(course => (
        <li key={course.id}>
          {course.name}
          <button onClick={() => onDelete(course.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CourseList;
