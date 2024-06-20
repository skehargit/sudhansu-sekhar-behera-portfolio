import React from 'react'

const Loading = () => {
  return (
    <div className='h-screen w-full bg-black flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center'>
            <div className='animate-spin loader'></div>
            <div className='text-3xl text-white'>loading...</div>
        </div>
        
    </div>
  )
}

export default Loading