import React, { useEffect, useState } from 'react'
import Countries from './components/Countries'
import CountryStats from './components/CountryStats'
import Header from './components/Header'
import { useStateContext } from './context/Mode'
import { CountryProps } from './main'

const App = () => {

  const [showCountryStatats, setshowCountryStatats] = useState(true)
  const [countries, setCountries] = useState<CountryProps[]>([])
  const [countriesCurrent, setCountriesCurrent] = useState<CountryProps[]>([])
  const [resultBuscas, setResultBuscas] = useState<CountryProps[]>([])
  const [countryStats, setCountryStats] = useState<CountryProps | null>(null)
  const [searchActive, setSearchActive] = useState(false)
  const [searchFilter, setSearchFilter] = useState(false)
  const {mode} = useStateContext()

  const fetchData = async () => {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const json = await response.json()

    setCountriesCurrent(json)
    setCountries(json)
    setResultBuscas(json)
  }

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }, [])

  function dispatchCountry(country: CountryProps) {
    setCountryStats(country)
    setshowCountryStatats(false)

  }

  //console.log(countries)


  return (

    <body className={` ${mode? 'bg-stone-200' : 'bg-zinc-900'}`}>
      <Header onclick={() => setshowCountryStatats(true)} state={showCountryStatats} contries={countries} setContries={setCountries} setResultBusca={setResultBuscas} setSearchActive={setSearchActive} setSearchFilter={setSearchFilter} countriesCurrent={countriesCurrent} />
      <div className='pt-[12rem] flex justify-center'>

        {showCountryStatats ?
          <div className='flex flex-wrap gap-8 justify-center'>
            {searchActive ?
              resultBuscas.map(country => (
                <Countries country={country} onclick={() => dispatchCountry(country)} />
              )) :

              resultBuscas?.map(country => (
                <Countries country={country} onclick={() => dispatchCountry(country)} />))}
          </div>

          :
          <CountryStats country={countryStats} />}
      </div>
    </body>
  )
}

export default App