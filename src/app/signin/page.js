"use client"
import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <div>
            <section className='justify-center flex items-center  min-h-screen bg-[#F8F9FA]'>
                <div className='bg-white  w-full max-w-lg mx-6 md:mx-auto border border-white/20 shadow rounded'>
                    <h4 className='text-center py-3 text-2xl'>Sign into your account</h4>
                    <hr />
                    <div className='p-5 space-y-4'>
                        <div>
                            <label htmlFor='email' className='font-bold '>Email</label>
                            <input className='p-2 w-full  border border-gray-300  rounded focus:outline-none focus:border-blue-500' type="email" placeholder='Email' />
                        </div>
                        <div>
                            <label className='font-bold'>Password</label>
                            <input className='p-2 w-full  border border-gray-300  rounded focus:outline-none focus:border-blue-500' type="password" placeholder='password' />
                        </div>
                        <div className='flex justify-between '>
                            <div className='flex space-x-2 px-1 items-center'>
                                <input className='w-5 h-4' type='checkbox' />
                                <p>Keep me signed in</p>
                            </div>
                            <p>Forgot password?</p>
                        </div>
                        <div>
                            <button className='font-bold rounded text-white w-full bg-blue-500 py-2 hover:bg-blue-700'>Sign in</button>
                        </div>
                        <div>
                            <p className='text-center'>Don't have an account? {""}<Link className='text-blue-500 underline font-semibold' href="/signup" >Sign up</Link></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page