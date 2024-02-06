import React from 'react'
import Show from './show'
import SkeletonShow from './skeletonShow'

const ShowList = (props) => {
    const {shows,isLoading}=props
    const numShows=Array(200).fill(1)

if(isLoading){
    return (
        <div className='w-[90%] flex md:flex-wrap md:!flex-row justify-center items-center gap-14 max-md:!flex-col max-md:w-[90%] max-md:min-h-full'>
        {numShows.map((a,idx)=>(
          <SkeletonShow key={idx}/>
         )) }
         </div>
   
    )

}
  return (
    <div className='w-[90%] flex md:flex-wrap md:!flex-row justify-center items-center gap-14 max-md:!flex-col max-md:w-[90%] max-md:min-h-full'>
       {shows && shows.map(items=>(
        <Show key={items.id} items={items} isLoading={isLoading}/>
        )) }
        </div>
  )
}

export default ShowList