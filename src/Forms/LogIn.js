import React from "react";
import { useFormik } from "formik";
import validationSchema from "./Validations";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
function LogIn() {
  let navigate = useNavigate();
  const { handleChange, handleSubmit, values, touched, handleBlur, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth }}
    >
      <div className="cart">
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <br />
          <input name="email" value={values.email} onChange={handleChange} />
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
          <br />
          <br />
          <label>Password</label>
          <br />
          <br />
          <input
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <div className="error">{errors.password}</div>
          )}
          <br />
          <br />
          <br />
          <br />
          <button
            className=" btn btn-dark"
            type="submit"
            onClick={() => navigate("/home")}
          >
            Log In
          </button>
          <br />
          <br />
          <br />
          <br />
        </form>
      </div>
    </motion.div>
  );
}

export default LogIn;
