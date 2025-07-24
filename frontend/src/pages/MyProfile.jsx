import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useEffect } from 'react'

const MyProfile = () => {


  const {loadUserProfileData,userData} = useContext(AppContext)
  const [isEdit,setIsEdit] = useState(false)

  useEffect(()=>{

    loadUserProfileData()

  },[])



  return (
    <div className='max-w-lg flex flex-col gap-2 text-sm pt-5'>
      <img className='w-36 rounded ' src={assets.profile_pic} alt="" />
      {
        isEdit
        ?<input className='bg-gray-50 text-3xl font-medium max-w-60' type="text" value={userData.name} onChange={e=>setUserData(prev=>({...prev,name:e.target.value}))} />
        : <p className='font-medium text-3xl text-[#262626] mt-4'>{userData.name}</p>
      }
      <hr className='bg-[#ADADAD] h-[1px] border-none' />
      <div>
        

      </div>
      <div>
       
      </div>
      <div className='mt-10'>
       
      </div>
    </div>
  )
}

export default MyProfile
