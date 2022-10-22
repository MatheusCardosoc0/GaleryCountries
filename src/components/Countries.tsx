import React from 'react'
import { CountryProps } from '../main'

interface countryProps {
  onclick: () => void
  country: CountryProps 
}

const Countries = ({ onclick, country }: countryProps) => {
  return (
    <button onClick={onclick} className='brightness-125 text-slate-200 bg-zinc-800 p-4 items-center w-[18rem]'>
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