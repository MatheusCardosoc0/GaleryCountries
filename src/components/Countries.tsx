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
    <button onClick={onclick} className={`brightness-125 p-4 text-sm md:text-2xl items-center w-[9rem] md:w-[18rem] ${mode? 'bg-slate-400 text-stone-900' : 'text-slate-200 bg-zinc-800 '}`}>
      <img className='w-[16rem]' src={country.flags.svg} />
      <div className='text-start'>
        <p>{country.name.common}</p>
        <p>população: {country.population}</p>
        <p>Area: {country.area}</p>
      </div>
    </button>
  )
}

export default Countries