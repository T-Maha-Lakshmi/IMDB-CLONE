import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios'
import Pagination from './Pagination';

function Movies() {
  const [movies, setMovies] = useState([]); 
  const [pageNo, setPageNo]=useState(1)


  const handlePrev=()=>{
    if(pageNo==1){
      setPageNo(pageNo)
    }
    else{
       setPageNo(pageNo-1)
    }
   
  }

  const handleNext=()=>{
    setPageNo(pageNo+1)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=14d3e48edf0968edee100f93f3b592b8&language=en-US&page=${pageNo}`
      )
      .then((res) => {
        console.log(res.data.results); // log movies
        setMovies(res.data.results); // store movies in state
      })
  }, [pageNo]);

  return (
    <div className="p-4">
      <div className="text-2xl m-5 font-bold text-center">
        Trending Movies
      </div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {movies.map((movieObj)=>{
          return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
        })}
      </div>
      <Pagination handleNext={handleNext} handlePrev={handlePrev} pageNo={pageNo}/>
    </div>
  )
}

export default Movies
