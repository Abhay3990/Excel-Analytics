

import { createContext } from "react";


export const AdminContext = createContext()
import { useState } from "react";

const AdminContextProvider =  (props)=>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [aToken, setAToken] = useState(localStorage.getItem('aToken') ? localStorage.getItem('aToken') : '')

    const value = {
        backendUrl,
        aToken,setAToken
    }
    return(
        <AdminContext.Provider value={value}>{props.children}</AdminContext.Provider>
    )
}

export default AdminContextProvider


















