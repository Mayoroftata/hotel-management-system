"use client"
import React from 'react'
import {useFormik } from 'formik'
import Link from 'next/link'
import Image from 'next/image'
import { loginSchema } from './schema/page'

const Page = () => {
    const onSubmit = (values) => {
        console.log("Form submitted", values);
        const storedUser = JSON.parse(localStorage.getItem('userInfo')) 
        const {email, password} = storedUser

        // if (email !== ) {
            
        // }
        
    }
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: '', password: ''
        },
        validationSchema: loginSchema,
        onSubmit
    })
    // console.log(values);
    console.log(errors);

    return (
        <div>
            <div className='justify-center flex items-center  min-h-screen bg-blue-900'>
                <div className='bg-white  w-full max-w-lg mx-6 border border-white/20 shadow rounded'>
                    <h1 className='font-bold ps-4 text-center text-blue-900 my-5 text-2xl'>Welcome back </h1>
                    <div className='px-5 pb-5 space-y-2'>
                        <form onSubmit={handleSubmit} className='space-y-2.5'>
                            <div>
                                <input name='email' onBlur={handleBlur} value={values.email} onChange={handleChange} className={`p-2 w-full border border-gray-300 rounded-lg focus:outline-none  ${errors.email && touched.email ? "border-red-500" : "focus:border-blue-900"}`} type="email" placeholder='Email' />
                                {errors.email && touched.email && (<p className="text-red-500 text-sm">{errors.email}</p>)}
                            </div>
                            <div>
                                <input name='password' onBlur={handleBlur} value={values.password} onChange={handleChange} className={`p-2 w-full border border-gray-300 rounded-lg focus:outline-none  ${errors.password && touched.password ? "border-red-500" : "focus:border-blue-900"}`} type="password" placeholder='password' />
                                {errors.password && touched.password && (<p className="text-red-500 text-sm">{errors.password}</p>)}
                            </div>
                            <div>
                                <button type='submit' className='font-bold rounded-lg text-white w-full bg-blue-900 py-2 hover:bg-blue-900'>Sign In</button>
                            </div>
                        </form>
                        <div>
                            <p className='text-center pt-2 text-gray-500'>Don't have an account? <Link href="/signup" className='text-blue-900 underline font-semibold'>Sign up</Link></p>
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

export default Page