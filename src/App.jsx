import { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Route, Routes } from 'react-router-dom'
import { MarketPlace, Signin, Signup } from './pages'


function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<MarketPlace />} />
        <Route path='/marketplace' element={<MarketPlace />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />


      </Routes>
      <Footer />
    </div>
  )
}

export default App