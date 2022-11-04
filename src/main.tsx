import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { UseContextProvider } from './context/Mode'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <UseContextProvider >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UseContextProvider>
)
