import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div className='w-full h-[80vh] bg-black flex items-center justify-center'>
        <div className='border-r h-1/2 w-1/2 text-white flex flex-col items-center justify-center' >
            <h1 className='responsiveFontSize leading-none anton'>404</h1>
            <h2 className='text-5xl anton uppercase'>page not found </h2>
            <Link to='/' className='uppercase border px-5 py-2'>go to home</Link>
        </div>
    </div>
  )
}

export default ErrorPage