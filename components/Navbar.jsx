import React from 'react'
import Logo from '../MovieLogo.png'

const Navbar = () => {
  return (
    <div className='flex border space-x-8 items-centre pl-3 py-4'>
        <img className='w-[50px]' src={Logo} alt=''/>
        <a href='/' className='text-blue-500 text-2xl font-bold'>Home</a>

        <a href='/watchlist' className='text-blue-500 text-2xl font-bold'>Watchlist</a>

    </div>
  )
}

export default Navbar