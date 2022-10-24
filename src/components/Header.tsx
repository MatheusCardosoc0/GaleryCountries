import React, { useEffect, useRef, useState } from 'react'
import { GiMoon, GiSun } from 'react-icons/gi'
import { BiSearchAlt } from 'react-icons/bi'
import { BsArrow90DegLeft, BsArrowBarLeft, BsFillArrowLeftSquareFill } from "react-icons/bs"
import { CountryProps } from '../main'
import { useStateContext } from '../context/Mode'

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

  const {setMode, mode} = useStateContext()


  useEffect(()=>{
    setSearchFilter(true)
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



  function countryFilterAtributes(param: 'population' | 'area' , type: 'inc' | 'dec'){
    let newcountrues = contries
    if(param === 'population'){
      if(type === 'dec'){
        newcountrues.sort((a, b) =>   a.population - b.population )
      }
      if(type === 'inc'){
        newcountrues.sort((a, b) =>  b.population - a.population)
      }
    }
    else if(param === 'area'){
      if(type === 'dec'){
        newcountrues.sort((a, b) =>   a.area - b.area )
      }
      if(type === 'inc'){
        newcountrues.sort((a, b) =>  b.area - a.area)
      }
    }

    setResultBusca(newcountrues)
    setSearchActive((prevActive : boolean) => !prevActive)
  }

  useEffect(() => {
    setSearchFilter(true)
    if(selectValueFilter === '1'){
      let newcountrues = contries
      setSearchFilter(false)
      setSearchCountry('')
  
      setResultBusca(newcountrues)
      setSearchActive((prevActive : boolean) => !prevActive)
    }
    if(selectValueFilter === '2'){
      countryFilterAtributes('population', 'inc')
    }
    if(selectValueFilter === '3'){
      countryFilterAtributes('population', 'dec')
    }
    if(selectValueFilter === '4'){
      countryFilterAtributes('area', 'inc')
    }
    if(selectValueFilter === '5'){
      countryFilterAtributes('area', 'dec')
    }
  },[selectValueFilter])


  async function CountryFilterRegion(region: string){
    let newcountrues = contries.filter(country => country.region === region)

    setResultBusca(newcountrues)
    setSearchActive((prevActive : boolean) => !prevActive)
  }



  useEffect(() => {
    setSearchFilter(true)
   setContries(countriesCurrent)
    if(selectValueRegion === '1'){
      setSearchCountry('')
      setSearchFilter(false)
    }
    if(selectValueRegion === '2'){
      setContries(countriesCurrent)
      CountryFilterRegion('Europe')
    }
    if(selectValueRegion === '3'){
      setContries(countriesCurrent)
      CountryFilterRegion('Asia')
    }
    if(selectValueRegion === '4'){
      setContries(countriesCurrent)
      CountryFilterRegion('Americas')
    }
    if(selectValueRegion === '5'){
      setContries(countriesCurrent)
      CountryFilterRegion('Oceania')
    }
    if(selectValueRegion === '6'){
      setContries(countriesCurrent)
      CountryFilterRegion('Africa')
    }
  },[selectValueRegion])





  return (
    <div className='fixed w-full z-10'>
      <header className={`flex justify-between px-2 py-5 ${mode? 'bg-slate-200 text-slate-900' : 'bg-slate-900 text-slate-200'}  drop-shadow-[0px_3px_20px] `}>
        <section className='flex flex-col gap-2'>
          <h1 className='md:text-3xl'>Galeria de paises</h1>
          <span className='flex gap-3 '>
            <select className={`${mode? 'bg-zinc-800 text-white': 'bg-white text-black' } rounded-xl w-20 text-sm  md:text-xl px-2 md:w-40` }onChange={e => setSelectValueRegion(e.target.value)} >
              <option value={"1"}>Todos</option>
              <option value={"2"}>Europa</option>
              <option value={"3"}>Asia</option>
              <option value={"4"}>Americas</option>
              <option value={"5"}>Oceania</option>
              <option value={"6"}>Africa</option>
            </select>
            <span className={`${mode? 'bg-zinc-700 text-white': 'bg-white text-black' } rounded-xl items-center flex px-3`}>
              <BiSearchAlt className={`${mode? 'text-white' : 'text-black'}`} />
              <input className='bg-transparent w-8 text-sm md:text-base md:w-32 px-2 text-black' type={"text"} onChange={e => setSearchCountry(e.target.value)} value={searchCountry} />
            </span>
          </span>
        </section>
        <button className='flex flex-col md:flex-row gap-3 items-center' onClick={() => setMode((prevMode: boolean) => !prevMode)}>
          <p className='text-base'>{mode? 'Dark mode': 'White mode'}</p>
          <div className='bg-white p-1 rounded-full flex justify-center'>
            <div className={`${mode? 'text-black' : 'text-yellow-500'}  text-3xl`} >
              {mode? <GiMoon /> : <GiSun />}
            </div>
          </div>
        </button>
      </header>

      <div className={`${mode? 'bg-slate-300': 'bg-slate-500'}`}>
        {state ?
          <select className={`${mode? 'bg-zinc-700 text-white': 'bg-white text-black' }`} onChange={e => setSelectValueFilter(e.target.value)}>
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