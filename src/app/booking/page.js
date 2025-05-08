"use client";
import React from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { bookingSchema } from "./schema/page";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const onSubmit = (values, e) => {
    console.log("Form submitted", values);
    e.resetForm();
    setTimeout(() => {
      // router.push("/signin")
    }, 2000);
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: {
        fullname: "",
        email: "",
        phone: "",
        arrival: "",
        departure: "",
      },
      validationSchema: bookingSchema,
      onSubmit,
    });
  return (
    <div>
      <div className="justify-center flex items-center  min-h-screen bg-blue-900">
        <div className="bg-white  w-full max-w-lg mx-6 border border-white/20 shadow rounded">
          <h1 className="text-center text-2xl font-bold text-blue-900 my-3">
            Hotel Booking
          </h1>
          {/* <h1 className='font-bold ps-4 text-blue-900 my-3'>Fill in your information </h1> */}
          <div className="px-5 pb-5 space-y-2">
            <form onSubmit={handleSubmit} className="space-y-2">
              <div>
                <label
                  className="text-blue-900 pb-1 font-medium block"
                  htmlFor="fullname"
                >
                  Full Name*
                </label>
                <input
                  name="fullname"
                  onBlur={handleBlur}
                  value={values.fullname}
                  onChange={handleChange}
                  className={`p-1.5 w-full border border-gray-300  rounded-lg focus:outline-none ${
                    errors.fullname && touched.fullname
                      ? "border-red-500"
                      : "focus:border-blue-900"
                  }`}
                  type="text"
                />
                {errors.fullname && touched.fullname && (
                  <p className="text-red-500 text-sm">{errors.fullname}</p>
                )}
              </div>
              <div>
                <label
                  className="text-blue-900 pb-1 font-medium block"
                  htmlFor="email"
                >
                  Email address*
                </label>
                <input
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  className={`p-1.5 w-full border border-gray-300 rounded-lg focus:outline-none  ${
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
                  htmlFor="number"
                >
                  Phone Number*
                </label>
                <input
                  name="phone"
                  onBlur={handleBlur}
                  value={values.phone}
                  onChange={handleChange}
                  className={`p-1.5 w-full border border-gray-300 rounded-lg focus:outline-none  ${
                    errors.phone && touched.phone
                      ? "border-red-500"
                      : "focus:border-blue-900"
                  }`}
                  type="number"
                />
                {errors.phone && touched.phone && (
                  <p className="text-red-500 text-sm">{errors.phone}</p>
                )}
              </div>
              <div className="flex space-x-3">
                <div className="w-full">
                  <label
                    className="text-blue-900 pb-1 font-medium block"
                    htmlFor="arrival"
                  >
                    Arrival Date*
                  </label>
                  <input
                    name="arrival"
                    onBlur={handleBlur}
                    value={values.arrival}
                    onChange={handleChange}
                    className={`p-1.5 w-full border border-gray-300 rounded-lg focus:outline-none  ${
                      errors.arrival && touched.arrival
                        ? "border-red-500"
                        : "focus:border-blue-900"
                    }`}
                    type="date"
                  />
                </div>
                <div className="w-full">
                  <label
                    className="text-blue-900 pb-1 font-medium block"
                    htmlFor="departure"
                  >
                    Departure Date*
                  </label>
                  <input
                    name="departure"
                    onBlur={handleBlur}
                    value={values.departure}
                    onChange={handleChange}
                    className={`p-1.5 w-full border border-gray-300 rounded-lg focus:outline-none  ${
                      errors.departure && touched.departure
                        ? "border-red-500"
                        : "focus:border-blue-900"
                    }`}
                    type="date"
                  />
                </div>
              </div>
              <div className="pt-1">
                <button
                  type="submit"
                  className="font-bold rounded-lg text-white w-full bg-blue-900 py-2 hover:bg-blue-900"
                >
                  Book now
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
