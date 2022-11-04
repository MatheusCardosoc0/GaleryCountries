import React from 'react'
import { useStateContext } from '../context/Mode'
import { CountryProps } from '../main'

interface countryStatsProps {
  country: CountryProps | null
}

const CountryStats = ({country}: countryStatsProps) => {

  const {mode} = useStateContext()

  const a = country?.languages

  return (
    <div className={`w-[18rem] md:w-[40rem] mb-12 ${mode? 'bg-slate-400 text-black': 'bg-zinc-800 text-slate-200'} flex flex-col brightness-125`}>
      <img className='' src={country?.flags.svg} />
      <div className='text-start flex px-8 py-12 justify-between  text-base md:text-3xl'>
        <div className=' flex flex-col gap-4'>
          <p>nome: <b>{country?.name.common}</b></p>
          <p>população: <b>{country?.population}</b></p>
          <p>área: <b>{country?.area}</b></p>
        </div>
        <div className=' flex flex-col gap-4'>
          <p>capital: <b>{country?.capital}</b></p>
          <p>independente? <b>{country?.independent? 'Sim' : 'Não'}</b></p>
          <p>região: <b>{country?.region}</b></p>
        </div>
      </div>
    </div>
  )
}

export default CountryStats