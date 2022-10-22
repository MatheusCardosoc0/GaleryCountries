import React from 'react'
import { GiSun } from 'react-icons/gi'
import { BiSearchAlt } from 'react-icons/bi'
import { BsArrow90DegLeft, BsArrowBarLeft, BsFillArrowLeftSquareFill } from "react-icons/bs"

interface headerProps {
  state: boolean
  onclick: () => void
}

const Header = ({ state, onclick }: headerProps) => {
  return (
    <div className='fixed w-full z-10'>
      <header className='flex justify-between px-2 py-5 bg-slate-900 drop-shadow-[0px_3px_20px] text-slate-200'>
        <section className='flex flex-col gap-2'>
          <h1 className='text-3xl'>Galeria de paises</h1>
          <span className='flex gap-3'>
            <select className='text-black rounded-xl text-xl px-2 w-40'>
              <option>Todos</option>
              <option>America do sul</option>
              <option>America do norte</option>
              <option>America central</option>
              <option>Oceania</option>
              <option>Europa</option>
              <option>Asia</option>
              <option>Africa</option>
            </select>
            <span className='bg-white flex items-center px-3 rounded-xl'>
              <BiSearchAlt className='text-black' />
              <input className='bg-transparent w-32 px-2 text-black' type={"text"} />
            </span>
          </span>
        </section>
        <div className='flex gap-3 items-center'>
          <p className='text-base'>White mode</p>
          <div className='bg-white p-1 rounded-full flex justify-center'>
            <span className='text-yellow-500  text-3xl'>
              <GiSun />
            </span>
          </div>
        </div>
      </header>

      <div className='bg-slate-500'>
        {state ?
          <select className='text-black'>
            <option>Maior polpulação</option>
            <option>Menor polpulação</option>
            <option>Maior area</option>
            <option>Menor area</option>
          </select> :
          <button onClick={onclick} className='bg-slate-200 p-2 flex items-center gap-6'><BsFillArrowLeftSquareFill /> Voltar</button>}
      </div>
    </div>
  )
}

export default Header