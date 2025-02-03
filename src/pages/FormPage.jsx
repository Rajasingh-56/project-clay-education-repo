import React from "react";
import "../Styles/FormPage.scss";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";


const FormValid = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required."),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number is not valid")
    .required("Phone number is required."),
  query: Yup.string()
    .min(10, "Query must be at least 10 characters")
    .required("Message is required."),
});

const FormPage = () => {
  return (
    <div className="form-section">
      <div className="form-page">
        <h3>
          Fill out the form, we'll reach out to you, <br /> understand your
          requirement and find you a mentor!
        </h3>
        <Formik
          key="home"
          initialValues={{
            name: "",
            email: "",
            phone: "",
            query: "",
          }}
          validationSchema={FormValid}
          onSubmit={(values) => {
            console.log("Campaign form submitted", values);
            navigate("/");
          }}
        >
          {({ errors, touched, values, handleBlur, handleChange }) => (
            <Form action="" className="form-field">
              <div className="admission-form">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.name && touched.name && (
                  <span className="error">{errors.name}</span>
                )}
              </div>

              <div className="admission-form">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="jane@framer.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.email && touched.email && (
                  <span className="error">{errors.email}</span>
                )}
              </div>

              <div className="admission-form">
                <label htmlFor="phone">Phone number</label>
                <input
                  type="number"
                  name="phone"
                  placeholder="Ph.no"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone && touched.phone && (
                  <span className="error">{errors.phone}</span>
                )}
              </div>

              <div className="admission-form">
                <label htmlFor="query">How can we help?</label>
                <input
                  type="text"
                  name="query"
                  placeholder="Your query"
                  value={values.query}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.query && touched.query && (
                  <span className="error">{errors.query}</span>
                )}
              </div>

              <div className="btn">
                <button className="cancel-btn" type="register">
                  Register now
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>{" "}
      .
    </div>
  );
};

export default FormPage;
