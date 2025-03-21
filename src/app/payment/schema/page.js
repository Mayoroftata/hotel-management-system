import * as yup from "yup"
let cardnoRegex = /^\d{16}$/
let expiryRegex = /^\d{4}$/
let cvvRegex = /^\d{3}$/

export const paymentSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required("Email is required"),
    cardnumber: yup.string().matches(cardnoRegex, "Card number must be 16 digits").required("Card number is required"),
    expiry: yup.string().matches(expiryRegex, "Expiry format should be MM/YY").required("Expiry date is required"),
    cvv: yup.string().matches(cvvRegex, "CVV must be exactly 3 digits").required("CVV is required"),
    cardname: yup.string().required("Cardholder name is required")
})