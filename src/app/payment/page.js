"use client";
import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { paymentSchema } from "./schema/Page";

const Page = () => {
  const router = useRouter();

  const onSubmit = (values, { resetForm }) => {
    console.log("Form submitted", values);
    resetForm();
    setTimeout(() => {
      // router.push("/signin")
    }, 2000);
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        cardnumber: "",
        expiry: "",
        cvv: "",
        cardname: "",
        paymentMethod: "",
      },
      validationSchema: paymentSchema,
      onSubmit,
    });
  return (
    <div>
      <div className="justify-center flex py-3 items-center  min-h-screen bg-blue-900">
        <div className="bg-white  w-full max-w-lg mx-6 border border-white/20 shadow rounded">
          <div className="border border-blue-900 rounded pl-3 md:mx-4 mx-5 py-1 my-3">
            <p className="font-bold text-blue-900 text-lg">Payment Details</p>
            <p className="font-semibold text-blue-900 text-sm">
              All card information are fully encrypted, secured and protected
            </p>
          </div>
          <div className=" md:mx-4 mx-5">
            <p className="font-semibold text-blue-900 text-sm">
              Select payment method
            </p>
            <div className="flex md:space-x-8 space-x-4">
              <div className="flex md:space-x-4 space-x-2">
                <input className="w-3.5" type="radio" name="paymentMethod" />
                <Image
                  alt="paypal"
                  src="/images/visa.svg"
                  width={40}
                  height={0}
                />
              </div>
              <div className="flex md:space-x-4 space-x-2">
                <input className="w-3.5" type="radio" name="paymentMethod" />
                <Image
                  alt="paypal"
                  src="/images/mastercard.svg"
                  width={40}
                  height={0}
                />
              </div>
              <div className="flex md:space-x-4 space-x-2">
                <input className="w-3.5" type="radio" name="paymentMethod" />
                <Image
                  alt="paypal"
                  src="/images/paypal.svg"
                  width={50}
                  height={0}
                />
              </div>
              <div className="flex md:space-x-4 space-x-2 items-center">
                <input className="w-3.5" type="radio" name="paymentMethod" />
                <p className="text-blue-900  font-semibold"> Crypto</p>
              </div>
            </div>
          </div>
          <div className="md:px-4 px-5 pb-5 space-y-2">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label
                  className="text-blue-900 pb-1 font-medium block"
                  htmlFor="email"
                >
                  Email address
                </label>
                <input
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  className={`p-1.5 pl-3 w-full border border-gray-300 rounded-lg focus:outline-none  ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "focus:border-blue-900"
                  }`}
                  type="email"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  className="text-blue-900 pb-1 font-medium block"
                  htmlFor="cardnumber"
                >
                  Card number
                </label>
                <input
                  name="cardnumber"
                  onBlur={handleBlur}
                  value={values.cardnumber}
                  onChange={handleChange}
                  className={`p-1.5 pl-3 w-full border border-gray-300  rounded-lg focus:outline-none ${
                    errors.cardnumber && touched.cardnumber
                      ? "border-red-500"
                      : "focus:border-blue-900"
                  }`}
                  type="text"
                  placeholder="1234 1234 1234 1234"
                />
                {errors.cardnumber && touched.cardnumber && (
                  <p className="text-red-500 text-sm">{errors.cardnumber}</p>
                )}
              </div>
              <div className="flex space-x-3">
                <div className="w-full">
                  <label
                    className="text-blue-900 pb-1 font-medium block"
                    htmlFor="expiry"
                  >
                    Expiry Date
                  </label>
                  <input
                    name="expiry"
                    onBlur={handleBlur}
                    value={values.expiry}
                    onChange={handleChange}
                    className={`p-1.5 pl-4 w-full border border-gray-300 rounded-lg focus:outline-none  ${
                      errors.expiry && touched.expiry
                        ? "border-red-500"
                        : "focus:border-blue-900"
                    }`}
                    type="number"
                    placeholder="MM/YY"
                  />
                  {errors.expiry && touched.expiry && (
                    <p className="text-red-500 text-sm">{errors.expiry}</p>
                  )}
                </div>
                <div className="w-full">
                  <label
                    className="text-blue-900 pb-1 font-medium block"
                    htmlFor="cvv"
                  >
                    CVV
                  </label>
                  <input
                    name="cvv"
                    onBlur={handleBlur}
                    value={values.cvv}
                    onChange={handleChange}
                    className={`p-1.5 pl-3 w-full border border-gray-300 rounded-lg focus:outline-none  ${
                      errors.cvv && touched.cvv
                        ? "border-red-500"
                        : "focus:border-blue-900"
                    }`}
                    type="number"
                    placeholder="123"
                  />
                  {errors.cvv && touched.cvv && (
                    <p className="text-red-500 text-sm">{errors.cvv}</p>
                  )}
                </div>
              </div>
              <div>
                <label
                  className="text-blue-900 pb-1 font-medium block"
                  htmlFor="number"
                >
                  Name on card
                </label>
                <input
                  name="cardname"
                  onBlur={handleBlur}
                  value={values.cardname}
                  onChange={handleChange}
                  className={`p-1.5 w-full border border-gray-300 rounded-lg focus:outline-none  ${
                    errors.cardname && touched.cardname
                      ? "border-red-500"
                      : "focus:border-blue-900"
                  }`}
                  type="text"
                />
                {errors.cardname && touched.cardname && (
                  <p className="text-red-500 text-sm">{errors.cardname}</p>
                )}
              </div>
              <div className="pt-1">
                <button
                  type="submit"
                  className="font-bold rounded-lg text-white w-full bg-blue-900 py-2 hover:bg-blue-900"
                >
                  Pay now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
