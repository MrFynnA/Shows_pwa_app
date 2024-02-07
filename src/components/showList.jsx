import React from 'react'
import Show from './show'
import SkeletonShow from './skeletonShow'
import { useStore } from '../store/store'

const ShowList = (props) => {
    const {shows,isLoading}=props
    const genre=useStore(store=>store.genre)
    const numShows=Array(200).fill(1)
    let showItems=shows
    if(genre){
      // console.log(genre)
      showItems=shows?.filter(items=>items?.genres.join(', ').includes(genre))
    }

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
       {showItems && showItems.map(items=>(
        <Show key={items.id} items={items} isLoading={isLoading}/>
        )) }
        </div>
  )
}

export default ShowList