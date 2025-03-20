"use client"
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"
import Link from 'next/link'
import Image from 'next/image'
// import { basicSchema } from './schemas/page'
import { useRouter } from 'next/navigation'

const Page = () => {
    const router = useRouter()
    const onSubmit = (values, e) => {
        console.log("Form submitted", values);
        localStorage.setItem("userInfo", JSON.stringify(values))
        e.resetForm()
        setTimeout(() => {
            router.push("/signin")
        }, 2000);
        
    }
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            fullname: '',  email: '', password: '', confirmpassword: ''
        },
        // validationSchema: basicSchema,
        onSubmit
    })
    // console.log(values);
    // console.log(errors);

    return (
        <div>
            <div className='justify-center flex items-center  min-h-screen bg-blue-900'>
                <div className='bg-white  w-full max-w-lg mx-6 border border-white/20 shadow rounded'>
                    <h1 className='font-bold ps-4 text-center text-blue-900 my-3 text-2xl'>Fill in your information </h1>
                    <div className='px-5 pb-5 space-y-2'>
                        <form onSubmit={handleSubmit} className='space-y-2'>
                            <div>
                                <label className='text-blue-900 pb-1 font-medium block' htmlFor='fullname'>Full Name*</label>
                                <input name='fullname' onBlur={handleBlur} value={values.fullname} onChange={handleChange} className={`p-2 w-full border border-gray-300  rounded-lg focus:outline-none ${errors.fullname && touched.fullname ? "border-red-500" : "focus:border-blue-900"}`} type="text" />
                                {errors.fullname && touched.fullname && (<p className="text-red-500 text-sm">{errors.fullname}</p>)}
                            </div>
                            <div>
                                <label className='text-blue-900 pb-1 font-medium block' htmlFor='email'>Email address*</label>
                                <input name='email' onBlur={handleBlur} value={values.email} onChange={handleChange} className={`p-2 w-full border border-gray-300 rounded-lg focus:outline-none  ${errors.email && touched.email ? "border-red-500" : "focus:border-blue-900"}`} type="email"/>
                                {errors.email && touched.email && (<p className="text-red-500 text-sm">{errors.email}</p>)}
                            </div>
                            <div>
                                <label className='text-blue-900 pb-1 font-medium block' htmlFor='number'>Phone Number*</label>
                                <input name='phone' onBlur={handleBlur} value={values.phone} onChange={handleChange} className={`p-2 w-full border border-gray-300 rounded-lg focus:outline-none  ${errors.phone && touched.phone ? "border-red-500" : "focus:border-blue-900"}`} type="tel" />
                                {errors.phone && touched.phone && (<p className="text-red-500 text-sm">{errors.phone}</p>)}
                            </div>
                            <div>
                                <label className='text-blue-900 pb-1 font-medium block' htmlFor='nextofkin'>Next of kin*</label>
                                <input name='nextofkin' onBlur={handleBlur} value={values.nextofkin} onChange={handleChange} className={`p-2 w-full border border-gray-300 rounded-lg focus:outline-none  ${errors.nextofkin && touched.nextofkin ? "border-red-500" : "focus:border-blue-900"}`} type="text"/>
                                {errors.confirmpassword && touched.confirmpassword && (<p className="text-red-500 text-sm">{errors.nextofkin}</p>)}
                            </div>
                            <div>
                                <label className='text-blue-900 pb-1 font-medium block' htmlFor='nextofkin'>Next of kin phone number*</label>
                                <input name='nextofkinnumber' onBlur={handleBlur} value={values.nextofkinnumber} onChange={handleChange} className={`p-2 w-full border border-gray-300 rounded-lg focus:outline-none  ${errors.nextofkinnumber && touched.nextofkinnumber ? "border-red-500" : "focus:border-blue-900"}`} type="tel" />
                                {errors.nextofkinnumber && touched.nextofkinnumber && (<p className="text-red-500 text-sm">{errors.nextofkinnumber}</p>)}
                            </div>
                            <div>
                                <button type='submit' className='font-bold rounded-lg text-white w-full bg-blue-900 py-2 hover:bg-blue-900'>Sign Up</button>
                            </div>
                        </form>
                        <div>
                            <p className='text-center pt-2 text-gray-500'>Have an account? <Link href="/signin" className='text-blue-900 underline font-semibold'>Sign in</Link></p>
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