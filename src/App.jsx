import { useState,useEffect } from 'react'
import './App.css'

import Previews from './components/previews'
import Nav from './components/Nav'
import Dialog from './components/dialog'

function App() {
  const [open,setOpen] = useState({
    open:false,
    id:undefined
  })

  function HandleOpen(id) {
    setOpen(prev => ({
      ...prev,
      open:!prev.open,
      id: parseInt(id)
    }))
  }
  function HandleClose() {
    setOpen(prev => ({
      ...prev,
      open:!prev.open,
      id: undefined
    }))
  }

  return (
    <div className='container'>
      <Nav />
      <Previews open={HandleOpen}/>
      <Dialog open={open.open} id={open.id} close={HandleClose}/>
    </div>
  )
}

export default App
