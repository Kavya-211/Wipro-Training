let courses = [
  { id: 1, name: "React Basics" },
  { id: 2, name: "Node.js Fundamentals" }
];

// ✅ GET all courses
exports.getCourses = (req, res) => {
  res.json(courses);
};

// ✅ ADD a course
exports.addCourse = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: "Course name is required" });
  }

  const newCourse = {
    id: courses.length + 1,
    name
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
};

// ✅ DELETE a course
exports.deleteCourse = (req, res) => {
  const id = parseInt(req.params.id);

  const courseExists = courses.find(c => c.id === id);
  if (!courseExists) {
    return res.status(404).json({ message: "Course not found" });
  }

  courses = courses.filter(c => c.id !== id);
  res.json({ message: "Course deleted" });
};
