import React, { createContext, useState } from 'react'
import { food_items } from '../food'
export const dataContext=createContext();

function UserContext({children}) {
    
    let [cate,setcate]=useState(food_items)
    let [input,setInput]=useState("")
    let data={
        input, 
        setInput,
        cate,
        setcate
    }
    return(
        <div>
            <dataContext.Provider value={data}>
            {children}
            </dataContext.Provider>
        </div>
    )
}

export default UserContext