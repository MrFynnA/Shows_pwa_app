import React from "react";


export const fetchShows=async()=>{
    const url = 'https://api.tvmaze.com/shows';

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


}



