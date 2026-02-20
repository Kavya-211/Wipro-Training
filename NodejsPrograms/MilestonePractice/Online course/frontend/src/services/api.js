const BASE_URL = "http://localhost:5001/courses";

export const getCourses = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const addCourse = async (name) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });
  return res.json();
};

export const deleteCourse = async (id) => {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
};
