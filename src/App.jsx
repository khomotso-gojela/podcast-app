import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import './App.css'
import { CContainer } from '@coreui/react'

import Previews from './components/previews'
import Nav from './components/Nav'
import Dialog from './components/Dialog/dialog'
import Player from './components/Player'
import SearchDialog from './components/Dialog/searchDialog'
import { supabase } from './superbase/client';
import Strip from './components/helperFunctions/strip';
import createFav from './components/helperFunctions/createFav'
import stripArray from './components/helperFunctions/stripArray';


function App() {
  const [favPreviews,setFavPreviews] = useState([])
  const [newFav, setNewFav] = useState([])
  const [sort,setSort] = useState('none')  
  const [page,setPage] = useState('All')
  const [open,setOpen] = useState({
    open:false,
    id:undefined,
    all:[],
  })
  const [playing,setPlaying] = useState({})

  useEffect(() => {
    async function gettingData() {
      const { data, error } = await supabase
          .from('favourates')
          .select();
  
      if (error) {
          // console.log(error.message);
      }
  
      if (data) {
          // console.log(createFav(data));

      }
      setFavPreviews(createFav(data))

  }
  gettingData()

  }, []);

  function handlePage(txt) {
    
    setPage(() => txt)
  }

  function HandleOpen(id,all) {
    
    setOpen(prev => ({
      ...prev,
      open: true,
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
    
    let r = null
    
    setFavPreviews(previous => {
      let newPrev = obj 
      
      let newSeason = ''
      newPrev.seasons.map(seas => {
        if (seas.season == season){
          newSeason = seas
          
        }
      })

      let newEpisode = newSeason.episodes[index]

      const isAlreadyInPrev = previous.some(item => item.id === newPrev.id)
      
      if (isAlreadyInPrev) {
        
        const newList = previous.map(show => {
          
          if (show.id == newPrev.id){
            newEpisode.fav = !newSeason.episodes[index].fav
            newSeason.fav = newSeason.episodes.some(item => item.fav == true)
            
            return Strip(newPrev)
          } else {
            return Strip(show)
          }
        })
        
        
        r = stripArray(newList)
        
      } else {

        newEpisode.fav = true
        newSeason.fav = newSeason.episodes.some(item => item.fav == true)

      
        console.log(stripArray([...previous, Strip(newPrev)]))

        r = stripArray([...previous, Strip(newPrev)]);
        
        
      }

      return r
    })
  }

  function playSound(epi) {
   
    setPlaying(prev => {
      return {
        ...prev,
        play:true,
        epi:epi
      }
      
    })
  }

  function handleSort(text) {
    
    setSort(() => text)
  }

  console.log(newFav)
  
  return (
    <>
      <CContainer fluid className='container'>
        <SearchDialog />

        <Previews 
          sorting={sort} 
          open={HandleOpen} 
          fav={favPreviews} 
          page={page} 
          setOpen={setOpen}
        />

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
      </CContainer>
      <Nav changepg={(txt) => handlePage(txt)} setSort={handleSort}/>
    </>
    )
}

export default App
