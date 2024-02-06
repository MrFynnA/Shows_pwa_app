import React from 'react'

const SkeletonShow = () => {
  return (
    <div className='flex flex-col gap-10 items-center '>
    <div className='w-[15rem] h-[18rem] bg-gray-200 animate-pulse rounded-md overflow-hidden  flex justify-center items-center hover:before:backdrop-brightness-[.6] lg:before:absolute relative before:transition-all before:duration-[0.4s] before:content-[""] before:w-full before:h-full cursor-pointer group before:rounded-md'>
     </div>
     <div id='title' className='underline cursor-pointer w-full rounded-md h-8 bg-gray-200 animate-pulse'></div>
     </div>
  )
}

export default SkeletonShow