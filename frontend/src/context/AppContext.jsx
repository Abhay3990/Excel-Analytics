
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'

export const AppContext = createContext()

const AppContextProvider = (props)=>{


    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
    const [userData, setUserData] = useState()

    const loadUserProfileData = async () => {
    
            try {
                console.log(token);
                
                const { data } = await axios.get(backendUrl + '/api/user/get-profile',{ headers: { token } })
                console.log(data);
                
                if (data.success) {
                    setUserData(data.userData)
                } else {
                    toast.error(data.message)
                }
                
                
            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
    
        }
        

        useEffect(() => {
                if (token) {
                    loadUserProfileData()
                }
        }, [token])


    const value = {
        backendUrl,
        token, setToken,
        userData, setUserData, loadUserProfileData
    }
    return(
        <AppContext.Provider value = {value}>{props.children}</AppContext.Provider>
    )
    
}


export {AppContextProvider}














