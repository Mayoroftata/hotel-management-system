"use client";
import React from "react";
import { useFormik } from "formik";
// import Link from 'next/link'
// import Image from 'next/image'
import { forgetPassSchema } from "./schema/Page";

const Page = () => {
  const onSubmit = (values) => {
    console.log("Form submitted", values);
  };
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    useFormik({
      initialValues: { email: "" },
      validationSchema: forgetPassSchema,
      onSubmit,
    });

  return (
    <div>
      <div className="justify-center flex items-center  min-h-screen bg-blue-900">
        <div className="bg-white  w-full max-w-lg mx-6 border border-white/20 shadow rounded">
          <h1 className="font-bold ps-4 text-center text-blue-900 my-5 text-2xl">
            Forgot Password{" "}
          </h1>
          <div className="px-5 pb-5 space-y-2">
            <form onSubmit={handleSubmit} className="space-y-2.5">
              <div className="">
                <label
                  className="text-blue-900 pb-1 font-semibold block"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  name="email"
                  onBlur={handleBlur}
                  value={values.email}
                  onChange={handleChange}
                  className={`p-2 w-full border border-gray-300 rounded-lg focus:outline-none  ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "focus:border-blue-900"
                  }`}
                  type="email"
                  placeholder="Enter your email"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
              <div>
                <button
                  type="submit"
                  className="font-bold rounded-lg text-white w-full bg-blue-900 py-2 hover:bg-blue-900"
                >
                  Reset Password
                </button>
              </div>
            </form>
            <p className="text-center text-gray-400">Back to login</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
