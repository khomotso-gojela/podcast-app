import { useState,useEffect, createRef} from 'react'
import ReactAudioPlayer from 'react-audio-player'

function ReactAudio(props) {
  const [lastPlayed,setLastplayed] = useState(() => {
    if (localStorage.getItem('lastPlayed')) {
      return JSON.parse(localStorage.getItem('lastPlayed'))
    } else {
      return {
        title: 'Episode title'
      }
    }
  })
  const [play,setPlay] = useState(
    lastPlayed
  )
  const [history,setHistory] = useState([])
  let playerRef = createRef()

  useEffect(() => {
      
      const src = props.setplaying.epi? props.setplaying.epi.file: lastPlayed.src
      const title = props.setplaying.epi? props.setplaying.epi.title: lastPlayed.title

      setPlay(() => {
          return (  
            {              
              src: src,
              title: title
            }
        )
      })

     
  },[props.setplaying])

  useEffect(() => {
    playerRef.current.audioEl.current.currentTime = lastPlayed.time
    
    
  }, []);

  // adds episode to history and save lastPlayed after pause 
  function handlePause(e){
    props.setWarn(false)
    
    const time = playerRef.current.audioEl.current.currentTime ? playerRef.current.audioEl.current.currentTime: ''
    const title = playerRef.current.props.title
    const src = playerRef.current.props.src
    const newAdd = {title:title,src:src,time:time}

    setLastplayed(newAdd)
    localStorage.setItem('lastPlayed',JSON.stringify(newAdd))
    
    setHistory(prev => {
      

      return [...prev, newAdd]
    })
    
  }

  useEffect(() => {
    localStorage.setItem('history',JSON.stringify(history))
  }, [history]);

  function handleReset() {
    localStorage.removeItem('history')
  }

  return (
    <div className="fixed-bottom">
    <>
      <div style={{color:'black'}}>{play.title}</div>
      <div>
        <ReactAudioPlayer
          id={play.title}
          title={play.title}
          ref={playerRef}
          key={play.title}
          src={play.src}        
          controls
          autoPlay
          onPlay={() => {props.setWarn(true)}}
          onPause={(e) => handlePause(e)}
          onListen={(e) => handleListen(e)}
        />
        <button onClick={handleReset}>Reset</button>
      </div>
      
    </>
    </div>
  )
}

export default ReactAudio