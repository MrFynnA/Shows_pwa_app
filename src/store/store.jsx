import { create } from "zustand";


const store=(set)=>({

     searchTerm:'',
     genre:"",
    showDetails:{},
    setShowDetails:(details)=>set({
        showDetails:{
            ...details  
        }
    }),
    setSearchValue:(value)=>set({searchTerm:value}),
    setGenre:(genreValue)=>set({genre:genreValue})
})


export const useStore=create(store)