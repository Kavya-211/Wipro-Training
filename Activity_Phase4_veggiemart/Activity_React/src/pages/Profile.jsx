import { useContext, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Profile() {
  const { state, dispatch } = useContext(AuthContext);
  const [isLogin, setIsLogin] = useState(true);

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6).required("Required"),
  });

  const handleSubmit = (values) => {
    dispatch({
      type: "LOGIN",
      payload: { name: "Veggie User", email: values.email },
    });
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  // If user logged in
  if (state.isAuthenticated) {
    return (
      <div className="flex justify-center mt-10">
        <div className="bg-white p-6 rounded shadow w-96 text-center">
          <h2 className="text-2xl font-bold mb-4">My Profile</h2>
          <p><strong>Name:</strong> {state.user.name}</p>
          <p><strong>Email:</strong> {state.user.email}</p>

          <button
            onClick={handleLogout}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }

  // If not logged in → show form
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white p-6 rounded shadow w-96">
        <h2 className="text-2xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Register"}
        </h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col gap-3">
            <Field name="email" type="email" placeholder="Email" className="border p-2 rounded"/>
            <ErrorMessage name="email" component="div" className="text-red-500 text-sm"/>

            <Field name="password" type="password" placeholder="Password" className="border p-2 rounded"/>
            <ErrorMessage name="password" component="div" className="text-red-500 text-sm"/>

            <button type="submit" className="bg-green-600 text-white py-2 rounded">
              {isLogin ? "Login" : "Register"}
            </button>
          </Form>
        </Formik>

        <p className="text-center mt-3 text-sm">
          {isLogin ? "New user?" : "Already have account?"}{" "}
          <button
            className="text-green-700 font-semibold"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default Profile;
