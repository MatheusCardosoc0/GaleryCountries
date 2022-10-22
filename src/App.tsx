import React, { useEffect, useState } from 'react'
import Countries from './components/Countries'
import CountryStats from './components/CountryStats'
import Header from './components/Header'
import { CountryProps } from './main'

const App = () => {

  const [showCountryStatats, setshowCountryStatats] = useState(true)
  const [countries, setCountries] = useState<CountryProps[]>([])
  const [countryStats, setCountryStats] = useState<CountryProps | null>(null)

  const fetchData = async() => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const json = await response.json()

    setCountries(json)
  }

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }
  },[])

  function dispatchCountry(country: CountryProps){
    setCountryStats(country)
    setshowCountryStatats(false)

  }


  return (

    <div className='text-2xl bg-zinc-900 h-screen'>
      <Header onclick={() => setshowCountryStatats(true)} state={showCountryStatats} />
      <div className='pt-[12rem] flex justify-center'>

        {showCountryStatats ?
          <div className='flex flex-wrap gap-8 justify-center'>
            {countries?.map(country =>(
              <Countries country={country} onclick={() => dispatchCountry(country)} />
            ) )}
          </div>

          :
          <CountryStats country={countryStats} />}
      </div>
    </div>
  )
}

export default App