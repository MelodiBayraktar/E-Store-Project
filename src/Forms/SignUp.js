
import "./style.css";
import { useFormik } from "formik";
import validationSchema from "./Validations";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function SignUp({email,password}) {
  let navigate = useNavigate();
  
  const { handleChange,handleSubmit, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        gender: "male",
       
      },
      onSubmit: (values) => {
        console.log(values);
      },
      validationSchema,
    });

  return (
    <motion.div
    initial={{width: 0}}
     animate={{width: "100%"}}
     exit={{x: window.innerWidth}}>
      <div className="cart">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <br />
          <label htmlFor="firstName">First Name</label>
          <br />

          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.firstName && touched.firstName && (
            <div className="error">{errors.firstName}</div>
          )}
          <br />

          <label htmlFor="lastName">Last Name</label>
          <br />

          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.lastName && touched.lastName && (
            <div className="error">{errors.lastName}</div>
          )}
          <br />

          <label htmlFor="email">Email</label>
          <br />

          <input
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
          <br />

          <label>Password</label>
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

          <label>Confirm Password</label>
          <br />

          <input
            name="passwordConfirm"
            type="password"
            value={values.passwordConfirm}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.passwordConfirm && touched.passwordConfirm && (
            <div className="error">{errors.passwordConfirm}</div>
          )}
          <br />

          <span>Male</span>
          <input
            type="radio"
            name="gender"
            onChange={handleChange}
            value="male"
            checked={values.gender === "male"}
          />
          <br />
          <span>Female</span>
          <input
            type="radio"
            name="gender"
            onChange={handleChange}
            value="female"
            checked={values.gender === "female"}
          />
          <br />
          <br />
          <button
            className=" btn btn-dark"
            type="submit"
            onClick={() => navigate("/home")}
          >
            Sign Up
          </button>
          <br />
          <br />
          {/* {JSON.stringify(values)} */}
        </form>
      </div>
    </motion.div>
  );
}

export default SignUp;
