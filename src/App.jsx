import { useState,useEffect } from 'react'
import './App.css'

import Previews from './components/previews'
import Nav from './components/Nav'
import Dialog from './components/Dialog/dialog'
import createPrev from './components/helperFunctions/createPrev'
import Player from './components/Player'
import SearchDialog from './components/Dialog/searchDialog'

function App() {
  const [favPreviews,setFavPreviews] = useState([])
  const [sort,setSort] = useState('none')
  
  const [page,setPage] = useState('All')
  const [open,setOpen] = useState({
    open:false,
    id:undefined,
    all:[],
  })

  const [playing,setPlaying] = useState({})

  function handlePage(txt) {
    console.log(txt)
    setPage(() => txt)
  }

  function HandleOpen(id,all) {
    // console.log(all)
    setOpen(prev => ({
      ...prev,
      open: true,//!prev.open,
      id: parseInt(id),
      all: all
    }))
  }

  function HandleClose() {
    setOpen(prev => ({
      ...prev,
      open:!prev.open,
      id: undefined
    }))
  }

  function setFav(obj,season,index) {
      
    HandleOpen(open.id,open.all)
    setFavPreviews(prev => {
      let newPrev = createPrev(undefined,null,obj)
      // console.log(newPrev)
      let newSeason = ''
      newPrev.seasons.map(seas => {
        if (seas.season == season){
          newSeason = seas
          
        }
      })

      let newEpisode = newSeason.episodes[index]

      const isAlreadyInPrev = prev.some(item => item.id === newPrev.id)
      
      if (isAlreadyInPrev) {
        
        const clear = prev.map(show => {
          
          if (show.id == newPrev.id){
            newEpisode.fav = !newSeason.episodes[index].fav
            newSeason.fav = newSeason.episodes.some(item => item.fav == true)
            
            // console.log(newPrev.seasons[season].fav)
            // console.log(newPrev.seasons[season].episodes[index].fav)
            return newPrev
          } else {
            return show
          }
        })
        
        
        return clear
        
      } else {

        newEpisode.fav = true
        newSeason.fav = newSeason.episodes.some(item => item.fav == true)
        
        // console.log(newPrev.seasons[season].fav)
        // console.log(newPrev.seasons[season].episodes[index].fav)
        return [...prev, newPrev];
        
      }
    })
    
  }

  function playSound(epi) {
    // console.log(epi)
    setPlaying(prev => {
      return {
        ...prev,
        play:true,
        epi:epi
      }
      
    })
  }

  function handleSort(text) {
    console.log(text)
    setSort(() => text)
  }
  
  return (
    <div className='container'>
      <Nav changepg={(txt) => handlePage(txt)} setSort={handleSort}/>
      <SearchDialog />
      <Previews sorting={sort} open={HandleOpen} fav={favPreviews} page={page} />
      <Dialog
        open={open.open}
        id={open.id}
        all={open.all}
        close={HandleClose}
        setFav={(data,season,index) => setFav(data,season,index)}
        updated={favPreviews}
        play={playSound}
      />
      
      <Player setplaying={playing} />
    </div>
  )
}

export default App
