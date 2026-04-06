import { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Route, Routes } from 'react-router-dom'
import { MarketCoinsDetails, MarketCoins, Signin, Signup } from './pages'


function App() {
  return (
    <div className=''>
      <Header />
      <Routes>
        <Route path='/' element={<MarketCoins />} />
        <Route path='/marketplace' element={<MarketCoins />} />
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/coin/:id' element={<MarketCoinsDetails />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App