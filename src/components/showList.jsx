import React from 'react'
import Show from './show'

const ShowList = (props) => {
    const {shows}=props
  return (
    <div className='w-[90%] flex md:flex-wrap md:!flex-row justify-center items-center gap-14 max-md:!flex-col max-md:w-[90%] max-md:min-h-full'>
       {shows && shows.map(items=>(
        <Show key={items.id} items={items}/>
        )) }
        </div>
  )
}

export default ShowList