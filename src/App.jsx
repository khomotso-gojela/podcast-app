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

  const setFav = (props,season,index) => {
      
    setFavPreviews(prev => {
      let newPrev = createPrev(props)
      let newSeason = newPrev.seasons[season]
      let newEpisode = newSeason.episodes[index]

      const isAlreadyInPrev = prev.some(item => item.id === newPrev.id)
      
      if (isAlreadyInPrev) {
        
        const clear = prev.map(show => {
          
          if (show.id == newPrev.id){
            newEpisode.fav = !show.seasons[season].episodes[index].fav
            newSeason.fav = newSeason.episodes.some(item => item.fav == true)
            
            console.log(newPrev.seasons[season].fav)
            console.log(newPrev.seasons[season].episodes[index].fav)
            return newPrev
          } else {
            return show
          }
        })
        
        
        return clear
        
      } else {

        newEpisode.fav = true
        newSeason.fav = newSeason.episodes.some(item => item.fav == true)
        
        console.log(newPrev.seasons[season].fav)
        console.log(newPrev.seasons[season].episodes[index].fav)
        return [...prev, newPrev];
        
      }
    })
    
  }
  
  useEffect(( ) => {
    console.log(favPreviews)
    
  },[favPreviews])
  
  return (
    <div className='container'>
      <Nav />
      <Previews open={HandleOpen} fav={favPreviews} page={page} />
      <Dialog open={open.open} id={open.id} close={HandleClose} setFav={(data,season,index) => setFav(data,season,index)}/>
    </div>
  )
}

export default App
