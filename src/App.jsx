import React, { useEffect, useState } from 'react'
import "./styles.css";
import { fetchShows } from './api/fetchShows';
import { CloseIcon } from './icons/icon';
import ShowList from './components/showList';

const App = () => {
    const[shows,setShows]=useState([])
    const[popup,setPopup]=useState(false)

    const fetchShow=async()=>{

        const show= await fetchShows()
          setShows(show)
          console.log(show)
    }


useEffect(()=>{
    fetchShow()
},[])

  return (
    <>
   {popup && (<div id="backdrop" onClick={()=>setPopup(false)} className="z-[50] fixed left-0 right-0 top-0 bottom-0 backdrop-brightness-75 max-md:backdrop-brightness-50 !h-full !w-full" />)}
    {popup && (<div className='!fixed -translate-x-2/4 -translate-y-2/4 z-[200] shadow-2xl left-2/4 top-[40%] !w-[75%] max-md:!w-[90%]'>  <div className='w-full h-[25rem] bg-white rounded-md relative animate-[pop_0.4s_ease-out]'>
       <header className='w-full'>
        <div className="w-full px-3 py-2 flex items-center gap-2"><div className=' text-xl font-bold'>{'this movie'}</div></div>
        <div onClick={()=>setPopup(false)} className='group absolute right-3 top-2 p-2 rounded-md cursor-pointer'><CloseIcon pathClassName='!fill-slate-700 group-hover:!fill-red-600 !stroke-slate-900' className='!w-3'/></div>
        </header>
       <div>
        jhgfdghjklkjhgf
       </div>
    </div></div>)}
   
    <div className='w-full bg-[#000000dc] text-white'>
    <header className='w-full fixed top-0 py-5 bg-[rgba(63,63,63,0.67)] z-50 flex justify-center'>
    <div className='w-[90%] flex items-center justify-between'>
        <div id='sitetitle' className='font-bold text-white font-sans text-2xl'>
   TV SHOWS
        </div>
        </div>
    </header>
    <div className='text-lg w-full flex flex-col gap-20 items-center  justify-center py-20 pt-[6rem]'>
    <div id='search Actions' className='flex max-lg:flex-col max-lg:gap-8 lg:justify-between items-center w-[90%]'>
        <div className='w-[50%] max-lg:w-full max-lg:justify-center max-md:justify-normal [&>*]:bg-light-white [&>*]:p-1 [&>*]:px-2 [&>*]:rounded-md [&>*]:cursor-pointer hover:[&>*]:bg-[rgba(108,108,108,0.25)] flex gap-4 items-center max-md:overflow-x-scroll max-md:py-3 scroll-smooth max-md:rounded-3xl max-md:px-4'>
            <span>Drama</span>
            <span>Romance</span>
            <span>Adventure</span>
            <span>Action</span>
            <span>Comedy</span>
            <span>Mystery</span>
        </div>
        <div className='flex w-[35%] max-lg:w-[55%] max-md:w-full'>
        <div className='w-full max-md:w-full max-lg:w-full'>
            <input type='text' placeholder='search your favorite show...' className='w-full p-2 rounded-l-md border-r-2 border-gray-300 outline-none placeholder:text-gray-600 focus:border-black focus:ring-1 focus:ring-black text-black bg-gray-300 transition-colors duration-[0.5s] px-4'/>
        </div>
        <button className='p-2 px-6 text-black bg-white rounded-r-md hover:bg-black hover:text-white'>Search</button>
        </div>
    </div>
        <ShowList shows={shows}/>
    </div>
    </div>
    </>
  )
}

export default App