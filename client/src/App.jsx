import { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import { MarketCoinsDetails, MarketCoins, Signin, Signup } from './pages'
import ScrollToTop from './utils/scrollToTop'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUser } from './store/slicers/authSlice'

function App() {

  let dispatch = useDispatch()



  let handleReload = async () => {
    let access = localStorage.getItem("access")
    let refresh = localStorage.getItem("refresh")

    let res = await axios.get("http://127.0.0.1:8000/api/auth/profile/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`
      }
    })



    dispatch(setUser({
      id: res.data.data.id,
      username: res.data.data.username,
      email: res.data.data.email,
      role: res.data.data.role,
      phone: res.data.data.phone,
      avatar: res.data.data.avatar,
      banner: res.data.data.banner,
      subscription: res.data.data.subscription,
      isAuthenticate: true
    }))

  }




  useEffect(() => {
    handleReload()
  }, [])


  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<MarketCoins />} />


        <Route path='/marketplace' element={<MarketCoins />} />
        <Route path='/coin/:id' element={<MarketCoinsDetails />} />



        <Route path='sign-in' element={<Signin />} />
        <Route path='sign-up' element={<Signup />} />



      </Routes>
      <Footer />
    </div>
  )
}

export default App