import React from 'react'

export default function From_to() {
  return (
     <div className='flex gap-[15px]'>
    <div className='flex font-normal flex-col items-center'>
      <p className='text-sm '>from</p>
      <p className=''>Cairo</p>
    </div>
    <div className='flex items-center'>
      <div className='bg-black size-2 rounded-full'></div>
      <div className='bg-black w-[103px] h-[2px] rounded-full'></div>
      <div className='bg-black size-2 rounded-full'></div>
    </div>
    <div className='flex font-normal flex-col items-center'>
      <p className='text-sm '>To</p>
      <p className=''>Alexandria</p>
    </div>
  </div>

  )
}
