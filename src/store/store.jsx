import { create } from "zustand";


const store=(set)=>({


    showDetails:{},
    setShowDetails:(details)=>set({
        showDetails:{
            ...details  
        }
    })
})


export const useStore=create(store)