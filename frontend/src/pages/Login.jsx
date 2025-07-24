import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'

const Login = () => {
    const [state,setState] = useState('Sign Up')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [name,setName] = useState('')

    const navigate = useNavigate()
    const { backendUrl, token, setToken } = useContext(AppContext)


  const onSubmitHandler = async (event) => {
      event.preventDefault();
  
      if (state === 'Sign Up') {
        console.log(backendUrl);
        console.log(name,email,password);
        
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, email, password })
        console.log("data:",data);
        
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)

        } else {
          toast.error(data.message)
        }
  
      } else {
  
        const { data } = await axios.post(backendUrl + '/api/user/login', { email, password })
  
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
  
      }
  
    }

    useEffect(() => {
        if (token) {
          navigate('/')
        }
    }, [token])


  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
              <p className='text-2xl font-semibold'>{state==='Sign Up' ? "Create Account" : "Login"}</p>
              
              {
                state==='Sign Up'
                &&<div className='w-full'>
                <p>Full Name</p>
                <input type="text" onChange={(e)=>setName(e.target.value)}   value={name} required className='border border-[#DADADA] rounded w-full p-2 mt-1'/>
              </div>
              }
              
              <div className='w-full'>
                <p>Email</p>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}   value={email} required className='border border-[#DADADA] rounded w-full p-2 mt-1'/>
              </div>
              <div className='w-full'>
                <p>Password</p>
                <input type="password" onChange={(e)=>setPassword(e.target.value)}   value={password} required className='border border-[#DADADA] rounded w-full p-2 mt-1'/>
              </div>
              <button className='bg-blue-400 text-white w-full py-2 my-2 rounded-md text-base cursor-pointer'>{state==='Sign Up' ? "Create Account" : "Login"}</button>
              {
                state==='Sign Up'
                ?<p>Already have an account ?<span onClick={()=>setState('Login')} className='text-blue-400 underline cursor-pointer'> login here</span> </p>
                :<p>Create an new account?<span onClick={()=>setState('Sign Up')} className='text-blue-400 underline cursor-pointer'> click here</span> </p>
              }

        </div>
    </form>
  )
}

export default Login
