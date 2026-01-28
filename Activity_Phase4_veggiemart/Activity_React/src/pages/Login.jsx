import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from "../auth/AuthContext";

function Login() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 characters").required("Required"),
  });

  const handleSubmit = (values) => {
    // Fake login (you can connect backend later)
    dispatch({
      type: "LOGIN",
      payload: { name: "Veggie User", email: values.email },
    });

    navigate("/profile");
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-3">
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="border p-2 rounded"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />

            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="border p-2 rounded"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />

            <button
              type="submit"
              className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default Login;
