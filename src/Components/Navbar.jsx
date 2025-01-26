import React from 'react'

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-[#2C3E50] h-16 text-base sm:text-lg items-center font-bold text-white fixed top-0 w-full z-10 px-2 sm:px-12">
          <div className='flex items-center gap-3 cursor-pointer'>
          <img src="todo.png" alt="" className='h-10' />
          <span>My Todo</span>
      </div>
          <ul className='flex gap-2 sm:gap-7'>
              <li className='cursor-pointer'>Home</li>
              <li className='cursor-pointer'>Your Task</li>
          </ul>
    </nav>
  )
}

export default Navbar
