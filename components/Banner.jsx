import React from 'react'

function Banner() {
  return (
  <>
    <div className='relative h-[20vh] md:h-[70vh] bg-cover bg-center' style={{backgroundImage:'URL(https://wallpapercave.com/wp/7KusLWP.jpg)'}}>
        <div className='absolute bottom-0 w-full text-black font-bold text-xl text-center bg-white/60 p-2'>Avengers</div>
        </div>
    </>
  )
}

export default Banner