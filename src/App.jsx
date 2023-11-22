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

  function setFav(props,season,index) {

    console.log('clicked')

    setFavPreviews(prev => {
      let newPrev = createPrev(props)
      let newSeason = newPrev.seasons[season]
      let newEpisode = newSeason.episodes[index]

      const isAlreadyInPrev = prev.some(item => item.id === newPrev.id)
      
      if (!isAlreadyInPrev) {
        newEpisode.fav = true
        newSeason.fav = newSeason.episodes.some(item => item.fav === true)
        
        console.log(newPrev)
        return [...prev, newPrev];
      } else {

        const clear = prev.map(show => {
            if (show.id == newPrev.id){
              newSeason.fav = newSeason.episodes.some(item => item.fav === true)
              newEpisode.fav = false
              return newPrev
            } else {
              return show
            }
          }
        )
        
        console.log(newPrev)
        return clear
      }
  })
  }

  return (
    <div className='container'>
      <Nav />
      <div>{favPreviews.map(item => item.title)}</div>
      <Previews open={HandleOpen}/>
      <Dialog open={open.open} id={open.id} close={HandleClose} setFav={(data,season,index) => setFav(data,season,index)}/>
    </div>
  )
}

export default App
