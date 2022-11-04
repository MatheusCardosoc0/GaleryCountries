import React from 'react'
import { useStateContext } from '../context/Mode'
import { CountryProps } from '../main'

interface countryProps {
  onclick: () => void
  country: CountryProps 
}

const Countries = ({ onclick, country }: countryProps) => {

  const {mode} = useStateContext()

  return (
    <button onClick={onclick} className={`brightness-125 p-4 text-sm md:text-3xl items-center w-[9rem] md:w-[18rem] rounded ${mode? 'bg-slate-400 text-stone-900' : 'text-slate-200 bg-zinc-800/40 opacity-100 backdrop-blur-3xl '}`}>
      <img className='w-[16rem]' src={country.flags.svg} />
      <div className='text-start'>
        <p className='mt-2'>{country.name.common}</p>
      </div>
    </button>
  )
}

export default Countries