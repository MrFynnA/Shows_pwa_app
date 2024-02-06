import React from 'react'
import { useStore } from '../store/store'

const Show = (props) => {
    const {onClick,items}=props
    const showDetails={
         name:items.name,
         image:items.image.original,
         premiered:items.premiered,
         rating:items.rating.average,
         summary:items.summary,
         genres:items.genres
    }
    const setShow=useStore(store=>store.setShowDetails)
    const setMovieDetails=()=>{
        setShow(showDetails)
    }
  return (
    <div className='flex flex-col gap-14 items-center'>
    <div onClick={setMovieDetails} className='lg:w-[15rem] flex justify-center items-center hover:before:backdrop-brightness-[.6] md:before:absolute relative before:transition-all before:duration-[0.4s] before:content-[""] before:w-full before:h-full cursor-pointer group before:rounded-md'>
     <button className='absolute group-hover:block hidden font-bold outline-none animate-ping z-40'>view show</button>
     <img className=' rounded-md box-shadow w-full'  src={items.image.medium} alt={items.name} />
     </div>
     <div onClick={setMovieDetails} id='title' className='underline cursor-pointer'>{items.name}</div>
     </div>
     
  )
}

export default Show