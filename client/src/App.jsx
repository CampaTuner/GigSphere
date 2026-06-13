import { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import { MarketCoinsDetails, MarketCoins, Signin, Signup } from './pages'
import ScrollToTop from './utils/scrollToTop'

function App() {

  let { pathname } = useLocation()
  let [isAuthenticate, setIsAuthenticate] = useState(false)


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [pathname])

  return (
    <div className=''>
      <Header isAuthenticate={isAuthenticate} setIsAuthenticate={setIsAuthenticate} />
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