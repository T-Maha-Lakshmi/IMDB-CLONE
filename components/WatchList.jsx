import React from 'react'

function WatchList() {
  return (
    <>
    <div className='flex justify-center m-4 gap-5'>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-blue-400 rounded-xl font-bold text-white'>Thriller</div>
      <div className='flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl font-bold text-white'>Thriller</div>
    </div>
    <div className='flex justify-center my-4'>
        <input type='text' placeholder='Search Movies' className='h-[3rem] w-[18rem] bg-gray-200 outline-none p-4'/>
    </div>
    <div className='overflow-hidden rounded-lg border border-gray-200 m-8'>
      <table className='w-full text-center'>
        <thead className='border-b-2'>
          <tr>
            <th>Name</th>
            <th>Ratings</th>
            <th>Popularity</th>
            <th>Genre</th>
          </tr>
        </thead>
        <tbody>
          <tr className='border-b-2'>
            <td className='flex items-center px-6 py-4'>
              <img className='h-[6rem] w-[10rem]' src={`https://marketplace.canva.com/EAE_E8rjFrI/1/0/1131w/canva-minimal-mystery-of-forest-movie-poster-ggHwd_WiPcI.jpg`}/>
              <div className='mx-10'>Mystery of Forest</div>
            </td>

            <td>8.5</td>
            <td>9</td>
            <td>Thriller</td>
            <td className='text-red-800'>Delete</td>
          </tr>
        </tbody>
      </table>
    </div>

    </>
  )
}

export default WatchList