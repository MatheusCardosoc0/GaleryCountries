import React, { useState } from 'react'
import Countries from './components/Countries'
import CountryStats from './components/CountryStats'
import Header from './components/Header'

const App = () => {

  const [showCountryStatats, setshowCountryStatats] = useState(false)


  return (
    <div className='text-2xl bg-zinc-900 h-screen'>
      <Header />
      <div className='pt-[12rem] flex flex-wrap gap-8 justify-center'>

        {showCountryStatats ?
          <div>
            <Countries />
            <Countries />
            <Countries />
            <Countries />
            <Countries />
            <Countries />
            <Countries />
          </div>

          :
          <CountryStats />}
      </div>
    </div>
  )
}

export default App