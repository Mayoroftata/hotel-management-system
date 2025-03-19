"use client"
import React from 'react'
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik'
import * as Yup from "yup"
import Link from 'next/link'
import Image from 'next/image'
import { basicSchema } from '../schemas/page'

const page = () => {
    const onSubmit = ()=>{
        console.log("Form submitted", values);
        
    }
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            firstname: '', lastname: '', email: '', password: '', confirmpassword: ''
        },
        validationSchema: basicSchema,
        onSubmit
    })
    // console.log(values);
    console.log(errors);
    
    return (
        <div>
            <div className='justify-center flex items-center  min-h-screen bg-blue-900'>
                <div className='bg-white  w-full max-w-lg mx-6 border border-white/20 shadow rounded'>
                    <h1 className='font-bold ps-4 text-center text-blue-900 my-3 text-2xl'>Create Account </h1>
                    <div className='px-5 pb-5 space-y-2'>
                        <form onSubmit={handleSubmit} className='space-y-2'>
                            <div className='flex space-x-3'>
                                <input name='firstname' onBlur={handleBlur} value={values.firstname} onChange={handleChange} className={`p-2 w-full border border-gray-300  rounded-lg focus:outline-none ${errors.firstname && touched.firstname ? "border-red-500" : "border-gray-300 focus:border-blue-900"}`} type="text" placeholder='First name' />
                                <input name='lastname' onBlur={handleBlur} value={values.lastname} onChange={handleChange} className= {`p-2 w-full border border-gray-300 rounded-lg focus:outline-none  ${errors.lastname && touched.lastname ? "border-red-500" : "border-gray-300 focus:border-blue-900"}`} type="text" placeholder='Last name' />
                            </div>
                            <div>
                                <input name='email' onBlur={handleBlur} value={values.email} onChange={handleChange} className='p-2 w-full  border border-gray-300  rounded-lg focus:outline-none focus:border-blue-900' type="email" placeholder='Email' />
                            </div>
                            <div>
                                <input name='password' onBlur={handleBlur} value={values.password} onChange={handleChange} className='p-2 w-full  border border-gray-300  rounded-lg focus:outline-none focus:border-blue-900' type="password" placeholder='password' />
                            </div>
                            <div>
                                <input name='confirmpassword' onBlur={handleBlur} value={values.confirmpassword} onChange={handleChange} className='p-2 w-full  border border-gray-300  rounded-lg focus:outline-none focus:border-blue-900' type="password" placeholder='Confirm Password' />
                            </div>
                            <div>
                                <button type='submit' className='font-bold rounded-lg text-white w-full bg-blue-900 py-2 hover:bg-blue-900'>Sign Up</button>
                            </div>
                        </form>
                        <div>
                            <p className='text-center pt-2 !text-grey-500'>Have an account? <Link href="/signin" className='text-blue-900 underline font-semibold'>Sign in</Link></p>
                        </div>
                        <div className='flex items-center space-x-2 my-3'>
                            <hr className='flex-1 border-gray-300' />
                            <p className='text-center text-blue-900'> or  with </p>
                            <hr className='flex-1 border-gray-300' />
                        </div>
                        <div className='flex space-x-3'>
                            <button className='bg-blue-900 rounded-lg w-1/3 py-1 flex items-center justify-center'><Image alt='google' src="/images/google.svg" width={23} height={1} /></button>
                            <button className='bg-blue-900 rounded-lg w-1/3 py-1 flex items-center justify-center'><Image alt='google' src="/images/github.svg" width={30} height={1} /></button>
                            <button className='bg-blue-900 rounded-lg w-1/3 py-1 flex items-center justify-center'><Image alt='google' src="/images/facebook.svg" width={21} height={1} /></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page