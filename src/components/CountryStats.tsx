import React from 'react'
import { CountryProps } from '../main'

interface countryStatsProps {
  country: CountryProps | null
}

const CountryStats = ({country}: countryStatsProps) => {

  console.log(country?.languages)

  return (
    <div className=' text-slate-200 flex brightness-125'>
      <img className='w-[30rem]' src={country?.flags.svg} />
      <div className='text-start flex gap-16 px-2 pt-12 bg-zinc-800'>
        <div className=' flex flex-col gap-4'>
          <p>{country?.name.common}</p>
          <p>{country?.population}</p>
          <p>{country?.area}</p>
        </div>
        <div className=' flex flex-col gap-4'>
          <p>{country?.capital}</p>
          <p>{country?.independent? 'Sim' : 'Não'}</p>
          <p>{country?.region}</p>
        </div>
      </div>
    </div>
  )
}

export default CountryStats