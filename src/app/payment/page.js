"use client"
import React from 'react'
import { useFormik } from 'formik'
import Link from 'next/link'
// import { bookingSchema } from './schema/page'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const Page = () => {
    const router = useRouter()

    const onSubmit = (values, e) => {
        console.log("Form submitted", values);
        e.resetForm()
        setTimeout(() => {
            // router.push("/signin")
        }, 2000);

    }
    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            fullname: '', email: '', phone: '', arrival: '', departure: ''
        },
        // validationSchema: bookingSchema,
        onSubmit
    })
    return (
        <div>
            <div className='justify-center flex items-center  min-h-screen bg-blue-900'>
                <div className='bg-white  w-full max-w-lg mx-6 border border-white/20 shadow rounded'>
                    <div className='border border-blue-900 rounded pl-3 md:mx-4 mx-5 py-1 my-3'>
                        <p className='font-bold text-blue-900 text-lg'>Payment Details</p>
                        <p className='font-semibold text-blue-900 text-sm'>All card information is fully encrypted, secured and protected</p>
                    </div>
                    <div className=' md:mx-4 mx-5'>
                        <p className='font-semibold text-blue-900 text-sm'>Select payment method</p>
                        <div className='flex md:space-x-8 space-x-4'>
                            <div className='flex md:space-x-4 space-x-2'>
                                <input className='w-3.5' type='checkbox' />
                                <Image alt='paypal' src="/images/visa.svg" width={40} height={0} />
                            </div>
                            <div className='flex md:space-x-4 space-x-2'>
                                <input className='w-3.5' type='checkbox' />
                                <Image alt='paypal' src="/images/mastercard.svg" width={40} height={0} />
                            </div>
                            <div className='flex md:space-x-4 space-x-2'>
                                <input className='w-3.5' type='checkbox' />
                                <Image alt='paypal' src="/images/paypal.svg" width={50} height={0} />
                            </div>
                            <div className='flex md:space-x-4 space-x-2 items-center'>
                                <input className='w-3.5' type='checkbox' />
                                <p className='text-blue-900  font-semibold'> Crypto</p>
                            </div>
                        </div>

                    </div>
                    <div className='md:px-4 px-5 pb-5 space-y-2'>
                        <form onSubmit={handleSubmit} className='space-y-2'>
                            <div>
                                <label className='text-blue-900 pb-1 font-medium block' htmlFor='email'>Email address</label>
                                <input name='email' onBlur={handleBlur} value={values.email} onChange={handleChange} className={`p-1.5 w-full border border-gray-300 rounded-lg focus:outline-none  ${errors.email && touched.email ? "border-red-500" : "focus:border-blue-900"}`} type="email" />
                                {errors.email && touched.email && (<p className="text-red-500 text-sm">{errors.email}</p>)}
                            </div>
                            <div>
                                <label className='text-blue-900 pb-1 font-medium block' htmlFor='cardnumber'>Card number</label>
                                <input name='cardnumber' onBlur={handleBlur} value={values.cardnumber} onChange={handleChange} className={`p-1.5 w-full border border-gray-300  rounded-lg focus:outline-none ${errors.cardnumber && touched.cardnumber ? "border-red-500" : "focus:border-blue-900"}`} type="text" placeholder='1234 1234 1234 1234' />
                                {errors.cardnumber && touched.cardnumber && (<p className="text-red-500 text-sm">{errors.cardnumber}</p>)}
                            </div>
                            <div className='flex space-x-3'>
                                <div className='w-full'>
                                    <label className='text-blue-900 pb-1 font-medium block' htmlFor='arrival'>Expiry Date</label>
                                    <input name='arrival' onBlur={handleBlur} value={values.arrival} onChange={handleChange} className={`p-1.5 w-full border border-gray-300 rounded-lg focus:outline-none  ${errors.arrival && touched.arrival ? "border-red-500" : "focus:border-blue-900"}`} type="month" />
                                </div>
                                <div className='w-full'>
                                    <label className='text-blue-900 pb-1 font-medium block' htmlFor='monthYear'>CVV</label>
                                    <input name='departure' onBlur={handleBlur} value={values.departure} onChange={handleChange} className={`p-1.5 w-full border border-gray-300 rounded-lg focus:outline-none  ${errors.departure && touched.departure ? "border-red-500" : "focus:border-blue-900"}`} type="number" />
                                </div>
                            </div>
                            <div>
                                <label className='text-blue-900 pb-1 font-medium block' htmlFor='number'>Name on card</label>
                                <input name='phone' onBlur={handleBlur} value={values.phone} onChange={handleChange} className={`p-1.5 w-full border border-gray-300 rounded-lg focus:outline-none  ${errors.phone && touched.phone ? "border-red-500" : "focus:border-blue-900"}`} type="text" />
                                {errors.phone && touched.phone && (<p className="text-red-500 text-sm">{errors.phone}</p>)}
                            </div>
                            <div className='pt-1'>
                                <button type='submit' className='font-bold rounded-lg text-white w-full bg-blue-900 py-2 hover:bg-blue-900'>Pay now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page