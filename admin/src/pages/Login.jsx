import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AdminContext } from '../context/AdminContext';
import axios from 'axios';

import { toast } from 'react-toastify'

const Login = () => {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()
    const { backendUrl, aToken, setAToken } = useContext(AdminContext)

  const onSubmitHandler = async (event) => {
      event.preventDefault();
      try {
          const { data } = await axios.post(backendUrl + '/api/admin/login', { email, password })
  
          if (data.success) {
           localStorage.setItem('aToken', data.atoken)
            setAToken(data.token)
          }
          else{
          toast.error(data.message)
          }
      } catch (error) {
         toast.error(error.message)
      }
      
  }
  

    useEffect(() => {
        if (aToken) {
          navigate('/')
        }
        
    }, [aToken])


  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
              <p className='text-2xl font-semibold'>Admin Login</p>
              
              <div className='w-full'>
                <p>Email</p>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}   value={email} required className='border border-[#DADADA] rounded w-full p-2 mt-1'/>
              </div>
              <div className='w-full'>
                <p>Password</p>
                <input type="password" onChange={(e)=>setPassword(e.target.value)}   value={password} required className='border border-[#DADADA] rounded w-full p-2 mt-1'/>
              </div>
              <button className='bg-blue-400 text-white w-full py-2 my-2 rounded-md text-base cursor-pointer'> Login</button>
              
        </div>
    </form>
  )
}

export default Login
