import React from 'react'

const Countries = () => {
  return (
    <button className='brightness-125 text-slate-200 bg-zinc-800 p-4 items-center w-[18rem]'>
      <img className='w-[16rem]' src='https://www.curitiba.pr.leg.br/atividade-parlamentar/legislacao/imagens/bandeira-do-brasil.png/image' />
     <div className='text-start'>
     <p>Nome</p>
      <p>População</p>
      <p>Area total</p>
     </div>
    </button>
  )
}

export default Countries