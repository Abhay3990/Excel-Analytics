import { useState } from 'react'
import React from 'react'
import { Route,Routes } from 'react-router-dom'
  import { ToastContainer, toast } from 'react-toastify';

import Home from './pages/Home'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Pricing from './pages/Pricing'
import Login from './pages/Login'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MyProfile from './pages/MyProfile'
import HistoryPage from './pages/HistoryPage';

import { useContext } from 'react';
import { AppContext } from './context/AppContext';

function App(){

  const {token} = useContext(AppContext)


  return token?(
      <div className='mx-4 sm:mx-[10%]' >
       <ToastContainer/>
        <Navbar></Navbar>
        <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/dashboard' element = {<Dashboard/>} />
            <Route path='/upload' element = {<Dashboard/>} />
            <Route path='/pricing' element = {<Pricing/>} />
            <Route path='/login' element = {<Login/>} />
            <Route path='/contact' element = {<Contact/>} />
            <Route path='/my-profile' element = {<MyProfile/>} />
            <Route path="/history" element={<HistoryPage />} />
        </Routes>
        <Footer></Footer>
      </div>
  )
  :(
    <>
      <ToastContainer></ToastContainer>
      <Login></Login>
    </>
  )
}

export default App




