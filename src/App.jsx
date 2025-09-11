import React from 'react'
import Navbar from '../components/Navbar'
import WatchList from '../components/WatchList'
import Movies from '../components/Movies'
import Banner from '../components/Banner'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
    <BrowserRouter> 
      <Navbar/>
    <Routes>
      <Route path='/' element={<><Banner/> <Movies/></>}/>
      <Route path='/watchlist' element={<WatchList/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App