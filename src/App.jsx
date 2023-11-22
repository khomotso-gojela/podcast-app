import { useState,useEffect } from 'react'
import './App.css'

import Previews from './components/previews'
import Nav from './components/Nav'
import Dialog from './components/dialog'
import createPrev from './components/createPrev'

function App() {
  const [favPreviews,setFavPreviews] = useState([])
  const [page,setPage] = useState('')
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

  function setFav(props) {
    console.log('clicked')
    setFavPreviews(prev => {
      
      let newPrev = createPrev(props)

      prev.map(show => {
        if (show.id == newPrev.id) {

            return [
              ...prev,
            ]

        } else {

            return [
              ...prev,
              newPrev
            ]

        }
      })

      
    })
  }

  return (
    <div className='container'>
      <Nav />
      <div>{favPreviews}</div>
      <Previews open={HandleOpen}/>
      <Dialog open={open.open} id={open.id} close={HandleClose} setFav={(data) => setFav(data)}/>
    </div>
  )
}

export default App
