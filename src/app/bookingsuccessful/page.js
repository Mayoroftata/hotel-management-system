"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Page = () => {
    return (
        <div>
            <div className='justify-center pt-20  min-h-screen bg-blue-900'>
                <div className='space-y-5'>
                    <Image className='px-7 md:px-0 mx-auto' src='/images/bro.png' width={400} height={0} alt='book' />
                    <p className='text-center text-xl font-bold text-white'>Booking Successful</p>
                    <p className='text-center px-4 text-xl font-bold text-white'>Thank you for choosing Deeluck hotel, your receipt have been sent to you email</p>
                    <div className='text-center'>
                        <button className='bg-blue-900 text-white font-base rounded border border-white px-5 py-2 mt-3'>Back Home</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page