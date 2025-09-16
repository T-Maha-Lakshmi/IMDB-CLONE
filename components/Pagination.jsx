import React from 'react'

function Pagination({handlePrev,handleNext,pageNo}) {
  return (
    
    <div className='bg-gray-600 p-4 flex justify-center mt-8 text-xl gap-7'>
    <div onClick={handlePrev}><i class="fa-solid fa-arrow-left"></i></div>
    <div className='font-bold'>{pageNo}</div>
    <div onClick={handleNext}><i class="fa-solid fa-arrow-right"></i></div>
    </div>

  )
}

export default Pagination