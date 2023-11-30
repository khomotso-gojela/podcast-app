import { useState,useEffect} from 'react'
import ReactAudioPlayer from 'react-audio-player'

function ReactAudio(props) {
  const [play,setPlay] = useState(<ReactAudioPlayer/>)

  useEffect(() => {
      
      const src = props.setplaying.epi? props.setplaying.epi.file:''
      const title = props.setplaying.epi? props.setplaying.epi.title:''
      console.log(src)

      setPlay(() => {
          return (  
            <>
              <div style={{color:'white'}}>{title}</div>
              <ReactAudioPlayer
                key={title}
                src={src}
                autoPlay
                controls
                onPlay={() => {props.setWarn(true)}}
                onPause={(e) => handlePause(e)}
              />
            </>
        )
      })
      
  },[props.setplaying])

  function handlePause(e){
    props.setWarn(false)
    console.log(e)

  }

  return (
    <div className="fixed-bottom">
        {play}
  </div>
  )
}

export default ReactAudio