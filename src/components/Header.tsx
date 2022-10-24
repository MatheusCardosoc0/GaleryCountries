import React, { useEffect, useRef, useState } from 'react'
import { GiSun } from 'react-icons/gi'
import { BiSearchAlt } from 'react-icons/bi'
import { BsArrow90DegLeft, BsArrowBarLeft, BsFillArrowLeftSquareFill } from "react-icons/bs"
import { CountryProps } from '../main'

interface headerProps {
  state: boolean
  onclick: () => void
  contries: CountryProps[]
  setContries: any
  setResultBusca: any
  setSearchActive: any
  setSearchFilter: any
  countriesCurrent: CountryProps[]
}

const Header = ({ state, onclick, contries, setContries, setResultBusca, setSearchActive, setSearchFilter, countriesCurrent }: headerProps) => {


  const [searchCountry, setSearchCountry] = useState('')
  const [selectValueFilter, setSelectValueFilter] = useState('')
  const [selectValueRegion, setSelectValueRegion] = useState('')


  useEffect(()=>{
    if(searchCountry.length > 0){
      setSearchActive(true)
    const dados = new Array

    contries?.map(country =>{
      const regra = new RegExp(searchCountry, "gi")
      if(regra.test(country.name.common)){
        dados.push(country)
      }
    })
    setResultBusca(dados)
  }
    else{
      setSearchActive(false)
    }
  },[searchCountry])

  console.log(contries)

  function largestPopulation(){
    let newcountrues = contries
    newcountrues.sort((a, b) =>  b.population - a.population)

    setResultBusca(newcountrues)
    setSearchActive((prevActive : boolean) => !prevActive)
  }

  function largestArea(){
    let newcountrues = contries
    newcountrues.sort((a, b) =>  b.area - a.area)

    setResultBusca(newcountrues)
    setSearchActive((prevActive : boolean) => !prevActive)
  }

  function minPopulation(){
    let newcountrues = contries
    newcountrues.sort((a, b) =>   a.population - b.population )

    setResultBusca(newcountrues)
    setSearchActive((prevActive : boolean) => !prevActive)
  }

  function minArea(){
    let newcountries = contries

    newcountries.sort((a, b) => a.area - b.area)

    setSearchActive((prevActive: boolean) => !prevActive)
    setResultBusca(newcountries)
  }

  useEffect(() => {
    if(selectValueFilter === '1'){
      let newcountrues = contries
      setSearchCountry('')
  
      setResultBusca(newcountrues)
      setSearchActive((prevActive : boolean) => !prevActive)
    }
    if(selectValueFilter === '2'){
      largestPopulation()
    }
    if(selectValueFilter === '3'){
      minPopulation()
    }
    if(selectValueFilter === '4'){
      largestArea()
    }
    if(selectValueFilter === '5'){
      minArea()
    }
  },[selectValueFilter])


  async function southAmerica(){
    let newcountrues = contries.filter(country => country.region === 'Americas')

    setResultBusca(newcountrues)
    setSearchActive((prevActive : boolean) => !prevActive)
  }

  function southAsia(){
    let newcountrues = contries.filter(country => country.region === 'Asia')

    setResultBusca(newcountrues)
    setSearchActive((prevActive : boolean) => !prevActive)
    
  }

  function southEurope(){
    let newcountrues = contries.filter(country => country.region === 'Europe')

    setResultBusca(newcountrues)
    setSearchActive((prevActive : boolean) => !prevActive)
    
  }

  function southOceania(){
    let newcountrues = contries.filter(country => country.region === 'Oceania')

    setResultBusca(newcountrues)
    setSearchActive((prevActive : boolean) => !prevActive)
    
  }



  useEffect(() => {
   setContries(countriesCurrent)
    if(selectValueRegion === '1'){
      setSearchCountry('')
    }
    if(selectValueRegion === '2'){
      setContries(countriesCurrent)
      southEurope()
    }
    if(selectValueRegion === '3'){
      setContries(countriesCurrent)
      southAsia()
    }
    if(selectValueRegion === '4'){
      setContries(countriesCurrent)
      southAmerica()
    }
    if(selectValueRegion === '5'){
      setContries(countriesCurrent)
      southOceania()
    }
  },[selectValueRegion])





  return (
    <div className='fixed w-full z-10'>
      <header className='flex justify-between px-2 py-5 bg-slate-900 drop-shadow-[0px_3px_20px] text-slate-200'>
        <section className='flex flex-col gap-2'>
          <h1 className='text-3xl'>Galeria de paises</h1>
          <span className='flex gap-3'>
            <select className='text-black rounded-xl text-xl px-2 w-40' onChange={e => setSelectValueRegion(e.target.value)} >
              <option value={"1"}>Todos</option>
              <option value={"2"}>Europa</option>
              <option value={"3"}>Asia</option>
              <option value={"4"}>Americas</option>
              <option value={"5"}>Oceania</option>
              <option value={"6"}>Europa</option>
              <option value={"7"}>Asia</option>
              <option value={"8"}>Africa</option>
            </select>
            <span className='bg-white flex items-center px-3 rounded-xl'>
              <BiSearchAlt className='text-black' />
              <input className='bg-transparent w-32 px-2 text-black' type={"text"} onChange={e => setSearchCountry(e.target.value)} value={searchCountry} />
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
          <select className='text-black' onChange={e => setSelectValueFilter(e.target.value)}>
            <option value={"1"}>Nenhum</option>
            <option value={"2"}>Maior polpulação</option>
            <option value={"3"}>Menor polpulação</option>
            <option value={"4"}>Maior area</option>
            <option value={"5"}>Menor area</option>
          </select> :
          <button onClick={onclick} className='bg-slate-200 p-2 flex items-center gap-6'><BsFillArrowLeftSquareFill /> Voltar</button>}
      </div>
    </div>
  )
}

export default Header