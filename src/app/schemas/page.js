import * as yup from "yup"
let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{5,}$/


export const basicSchema = yup.object().shape({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    password: yup.string().min(8, "Please must be at least 8 characters").matches(passwordRegex, {message: "Please create a stronger password"}).required("Required"),
    confirmpassword: yup.string().oneOf([yup.ref("password"), null]).required("Required")
})