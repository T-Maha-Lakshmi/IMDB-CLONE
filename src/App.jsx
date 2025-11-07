import React, { useEffect, useState, useRef} from 'react'
import Navbar from '../components/Navbar'
import WatchList from '../components/WatchList'
import Movies from '../components/Movies'
import Banner from '../components/Banner'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
    let [watchlist, setWatchList]=useState([])
    const isInitialMount = useRef(true)

    let handleAddtoWatchlist=(movieObj)=>{
      if (watchlist.some(m => String(m.id) === String(movieObj.id))) return
      let newWatchList=[...watchlist,movieObj]
      setWatchList(newWatchList)
      console.log(newWatchList)
    }

    let handleRemoveFromWatchlist=(movieObj)=>{
      let filteredWatchlist=watchlist.filter((movie)=>{
        return String(movie.id)!==String(movieObj.id)
      })
      setWatchList(filteredWatchlist)
      localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist))
      console.log(filteredWatchlist)
    }
    useEffect(()=>{
      const moviesFromLocalStorage=localStorage.getItem('moviesApp')
      if(!moviesFromLocalStorage){
        return
      }
      setWatchList(JSON.parse(moviesFromLocalStorage))
    },[])
    useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      return
    }
    localStorage.setItem('moviesApp', JSON.stringify(watchlist))
  }, [watchlist])

  return (
    
    <div>
    <BrowserRouter> 
      <Navbar/>
    <Routes>
      <Route path='/' element={<>
      <Banner/> 
      <Movies watchlist={watchlist} handleAddtoWatchlist={handleAddtoWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>
      </>}/>
      <Route path='/watchlist' element={<WatchList watchlist={watchlist} setWatchList={setWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App