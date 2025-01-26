import React from 'react'

const CodeBtn = () => {
  const showCode = () => {
    window.open("https://github.com/Pradyumn-Chaudhary/My-Todo", "_blank");
  }
  return (
      <button className='flex bg-[#6B4F97] hover:bg-[#5A3F7E] hover:font-bold items-center p-2 rounded-xl gap-2 absolute bottom-[10px]  text-white' onClick={showCode}>
          <img src="code.svg" alt="" />View Code
      </button>
  )
}

export default CodeBtn
