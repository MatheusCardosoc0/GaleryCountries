import React, { createContext, ReactNode, useContext, useState } from "react"

type userContextprops = {
  children: ReactNode
}

type InitialValue = {
  mode: boolean
  setMode: any
}

const Initial = {
  mode: false,
  setMode: ''
}


export const UserContext = createContext<InitialValue>(Initial)

export const UseContextProvider = ({ children }: userContextprops) => {
  /*const [State, setState] = useState<['Initial' | 'Selection' | 'Game']>(['Initial'])*/

  const[mode, setMode]= useState(Initial.mode)



  return (
    <UserContext.Provider value={
      {
        mode,setMode
      }
    }>
      {children}
    </UserContext.Provider>
  )
}

export const useStateContext = () => useContext(UserContext)