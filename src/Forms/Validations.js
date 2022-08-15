import * as yup from "yup";

let validations = yup.object({
  firstName: yup.string().min(3).required("First Name is a required field"),
  lastName: yup.string().min(2).required("Last Name is a required field"),
  email: yup.string().email().required(" Email is a required field"),
  password: yup.string().min(5).required(" Password is a required field"),

  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")])
    .required("Password confirm is a required field"),
});
export default validations;
