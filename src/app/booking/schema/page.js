import * as yup from "yup"
const match = /^\d{10}$/


export const bookingSchema = yup.object().shape({
    fullname: yup.string().required("Full name is required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
    phone: yup.string().matches(match, "Phone number must be 11 digits").required("Phone number is required"),
    arrival: yup.date().required("Arrival date is required").min(new Date(), "Arrival date must be today or later"),
    departure: yup.date().required("Departure date is required").min(new Date())
})
//  I still need to work on the arrival and depature validation