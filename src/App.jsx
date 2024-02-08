import React, { useEffect, useState ,useMemo,useCallback} from 'react'
import "./styles.css";
import { CloseIcon,Backbtn } from './icons/icon';
import movieBck from './images/movieBck-trans.jpeg'
import ShowList from './components/showList';
import { useStore } from './store/store';
import {FaStar} from 'react-icons/fa'
import {FaPlay} from 'react-icons/fa'
import GotoTop from './ui-elements/GoToTop';
import siteLogo from './siteLogo/showhub.png'


const App = () => {
    const[shows,setShows]=useState([])
    const[popup,setPopup]=useState(false)
    const[searchValue,setSearchValue]=useState('')
    const[find,setFind]=useState(false)
    const[isLoading,setIsLoading]=useState(false)
    const showDetails=useStore(store=>store.showDetails)
    const setGenre=useStore(store=>store.setGenre)
    const setSearch=useStore(store=>store.setSearchValue)
    const searchTerm=useStore(store=>store.searchTerm)
    const genre=useStore(store=>store.genre)
    const details= useMemo(() => showDetails, [showDetails])

    const fetchShows=useCallback(async()=>{

        let url = 'https://api.tvmaze.com/shows';
       try{
           const req=await fetch(url,{
            method: 'GET',
          })
           if(!req.ok){
                   throw new Error('couldnt get data 404')
           }
           const resData=await req.json()
    
           return resData
       }catch(error){
           return {
            message:error.message
           }
       }
    
    
    },[])

    const fetchShow=useCallback(async()=>{
         try{
            setIsLoading(true)
            const show= await fetchShows()
            setShows(show)
            setIsLoading(false)
            //  console.log(show)
         }catch(error){

         }
    },[fetchShows])


useEffect(()=>{
    fetchShow()
},[fetchShow])


useEffect(()=>{
    if(Object.keys(details).length!==0){
        setPopup(true)
    }else{
        setPopup(false)
    }
},[details])

const originalSummText=details.summary
const itemsToRemoveFromSumm=['<p>','<b>','</b>','</p>','<br />','<br/>']
const removeItems=(text,items)=>{
    let textUpdate=text
    items.forEach(items=>{
        textUpdate=textUpdate?.replace(new RegExp(items,'g'),' ')
    })
    return textUpdate
}
const newTextSumm=removeItems(originalSummText,itemsToRemoveFromSumm)
const submitHandler=(event)=>{
    event.preventDefault()
//   console.log(searchValue)
     setGenre('')
    setSearch(searchValue)
    setFind(true)
}
const genres=[
    'All',
    'Drama',
    'Romance',
    'Adventure',
    'War',
    'Action',
    'Comedy',
    'Horror',
    'Thriller',
]

  return (
    <>
   {popup && (<div id="backdrop" onClick={()=>setPopup(false)} className="z-[50] fixed left-0 right-0 top-0 bottom-0 backdrop-brightness-50 max-md:backdrop-brightness-50 !h-full !w-full" />)}
    {popup && (<div className='!fixed -translate-x-2/4 -translate-y-2/4 z-[200] shadow-2xl left-2/4 top-1/2 !w-[75%] max-lg:!w-[85%] max-md:!w-full'>  <div className='w-full bg-slate-100 rounded-md relative animate-[pop_0.4s_ease-out] max-md:scale-[.8]'>
       <header className='w-full md:pl-5 pl-2 select-none'>
        <div className="w-full  py-2 flex items-center gap-2"><div className=' text-3xl max-lg:text-2xl font-bold'>{details.name}</div></div>
        <div onClick={()=>setPopup(false)} className='group absolute right-3 max-md:right-1 top-2 p-2 rounded-md cursor-pointer'><CloseIcon pathClassName='!fill-slate-700 group-hover:!fill-red-600 !stroke-slate-900' className='!w-3 max-lg:!w-4'/></div>
        </header>
       <div className='text-black px-2 max-md:flex-col select-none pr-4 max-md:px-3 pb-4 flex items-start gap-4 relative'>
        <div id='genres' className='md:absolute flex items-center gap-2 max-lg:gap-1 [&>*]:max-lg:text-sm  right-10 [&>*]:p-1 [&>*]:text-white [&>*]:bg-[#000000de] [&>*]:px-3 [&>*]:rounded-full'>
            {details.genres.map((item,idx)=><span key={idx}>{item}</span>)}
        </div>
        <a href={details.link} rel='noreferrer' target='_blank'><button className='absolute z-50 flex items-center gap-2 right-12 max-md:right-10 top-[5rem] border-2 border-solid rounded-md outline-none p-3 font-bold border-neutral-500 hover:border-[rgba(35,34,34,0.88)] hover:text-white hover:bg-[rgba(35,34,34,0.88)] text-xl max-md:text-lg group'><FaPlay className='text-xl group-hover:text-white'/>Watch Here</button></a>
       <img className='w-[30%] rounded-md' src={details.image} alt={details.name}/>
        <div id='details' className='text-black drop-shadow-sm flex flex-col gap-3'>
          <div className='text-xl'><span>Rating:</span><div className='flex items-center gap-2'><FaStar className='text-[#f5c518] text-5xl max-lg:text-2xl'/>
          <span className='text-2xl font-bold'>{details.rating}<span className='text-xl text-neutral-600'>/10</span></span></div></div>
          <div className='text-xl'><span>Release Date:</span><div className='text-2xl font-bold'>{details.premiered}</div></div>
          <div className='text-xl select-text'><span>About:</span><div className='text-xl font-bold h-[16rem] overflow-y-scroll overflow-x-hidden'>{newTextSumm}</div></div>
        </div>
       </div>
    </div>
    </div>)}
   
    <div className='w-full  text-white relative z-10'>
    <div id='bg-image' className='absolute -z-10 w-full brightness-[.2]'>
          <img src={movieBck} alt='movieback' className='w-full'></img>
      </div>
    <header className='w-full fixed top-0 py-4 bg-[rgba(63,63,63,0.67)] z-50 flex justify-center'>
    <div className='w-[90%] flex items-center justify-between'>
        <div id='sitetitle' className='font-bold text-white font-sans text-2xl flex items-center gap-2'>
      <img src={siteLogo} alt='showHUB' className='w-8'/>SHOW HUB
        </div>
        </div>
    </header>
    <div className='text-lg w-full flex flex-col gap-20 items-center  justify-center py-20 pt-[6rem]'>
    <div id='search Actions' className='flex max-lg:flex-col max-lg:gap-8 lg:justify-between items-center w-[90%]'>
        {isLoading ?(
             <div className='w-[50%] max-lg:w-full max-lg:justify-center max-md:justify-normal [&>*]:bg-light-white [&>*]:animate-pulse [&>*]:p-1 [&>*]:px-2 [&>*]:rounded-md [&>*]:cursor-pointer flex gap-4 max-[1280px]:text-[1rem] items-center max-md:overflow-x-scroll max-md:py-3 scroll-smooth max-md:rounded-3xl max-md:px-4 text-transparent'>
              {genres && genres?.map((item,idx)=><span key={idx}>{item}</span>)}
              </div>
                
        ):(
        <div className='w-[50%] max-lg:w-full max-lg:justify-center max-md:justify-normal [&>*]:bg-[rgba(255,255,255,0.24)] [&>*]:p-1 [&>*]:px-2 [&>*]:rounded-md [&>*]:cursor-pointer hover:[&>*]:bg-[rgba(108,108,108,0.25)] flex gap-4 max-[1280px]:[&>*]:text-[1rem] items-center max-md:overflow-x-scroll max-md:py-3 scroll-smooth max-md:rounded-3xl max-md:px-4 select-none'>
            {genres && genres?.map((item,idx)=><span className={`${genre===item?'!bg-black !drop-shadow-md':''} ${genre==='' && idx===0 && '!bg-black !drop-shadow-md'}`} key={idx} onClick={()=>{
                if(idx===0){
                setGenre('')
                setSearch('')
                setFind(false)
                setSearchValue('')
                }else{

                    setGenre(item)
                    setSearch('')
                    setSearchValue('')
                    setFind(false)
                }
                
                }}>{item}</span>)}
        </div>
        )}
        {isLoading?(
        <div id='search-skeleton' className='flex w-[35%] max-lg:w-[55%] max-md:w-full rounded-md bg-light-white animate-pulse select-none'>
        <div className='w-full max-md:w-full max-lg:w-full'>
            <input type='text' className='w-full p-2 rounded-l-md border-r-2 !rounded-r-none border-transparent outline-none text-transparent bg-transparent px-4'/>
        </div>
        <button className='p-2 px-6 select-none text-transparent bg-transparent rounded-r-md'>Search</button>
        </div>

        ):(
            <form onSubmit={submitHandler} id='search-section' className='flex w-[35%] max-lg:w-[55%] max-md:w-full'>
            <div className='w-full max-md:w-full max-lg:w-full'>
                <input onChange={(e)=>setSearchValue(e.target.value)} type='text' placeholder='search your favorite show...' className='w-full p-2 rounded-l-md !rounded-r-none border-r-2 border-gray-300 outline-none placeholder:text-gray-600 focus:border-black focus:ring-1 focus:ring-black text-black bg-gray-300 transition-colors duration-[0.5s] px-4' value={searchValue}/>
            </div>
            <button className='p-2 px-6 text-black bg-white rounded-r-md hover:bg-black hover:text-white' type='submit'>Search</button>
            </form>  
        )
        
        }
    </div>
    {searchTerm && <div className='-mt-10 w-[90%] flex items-center gap-8 max-md:gap-6'><Backbtn onClick={()=>{
        setSearch('')
        setFind(false)

        }}/>showing results for "{searchTerm}"</div>}
        <ShowList shows={shows} isLoading={isLoading}/>
        {searchTerm && Object.keys(details).length===0 && <div className='text-4xl max-lg:hidden'>Sorry there are no results for this search "{searchTerm && searchTerm.length > 5 ? searchTerm.slice(0,5)+'...':searchTerm}"</div>}
    </div>
    </div>
    <GotoTop/>
    </>
  )
}

export default App