import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { FaRupeeSign } from "react-icons/fa";

function EMIcalculator() {

  const [emiValue, setEmiValue] = useState("");

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "85vh" }}   
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "100%",
          maxWidth: "500px",          
          borderRadius: "12px"
        }}
      >
        <h3 className="text-center mb-4">EMI Calculator</h3>

        <Formik
          initialValues={{
            amount: "",
            rate: "",
            months: ""
          }}

          validationSchema={Yup.object({
            amount: Yup.number()
              .required("Loan amount is required")
              .positive("Must be positive"),
            rate: Yup.number()
              .required("Interest rate is required")
              .positive("Must be positive"),
            months: Yup.number()
              .required("Months is required")
              .positive("Must be positive")
          })}

          onSubmit={(values) => {
            const P = Number(values.amount);
            const R = Number(values.rate) / 100 / 12;
            const N = Number(values.months);

            const emi =
              (P * R * Math.pow(1 + R, N)) /
              (Math.pow(1 + R, N) - 1);

            setEmiValue(emi.toFixed(2));
          }}
        >
          <Form>

            <div className="mb-3">
              <Field
                name="amount"
                type="number"
                className="form-control"
                placeholder="Loan Amount"
              />
              <ErrorMessage
                name="amount"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <Field
                name="rate"
                type="number"
                className="form-control"
                placeholder="Interest Rate (%)"
              />
              <ErrorMessage
                name="rate"
                component="div"
                className="text-danger"
              />
            </div>

            <div className="mb-3">
              <Field
                name="months"
                type="number"
                className="form-control"
                placeholder="Number of Months"
              />
              <ErrorMessage
                name="months"
                component="div"
                className="text-danger"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 mb-3"
            >
              Calculate EMI
            </button>
            
            {emiValue && (
              <div className="mb-3 text-center fw-bold text-success fs-5">
                <FaRupeeSign /> {emiValue}
              </div>
            )}

          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default EMIcalculator;
