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
              <div>{play.title}</div>
              <ReactAudioPlayer
                key={title}
                src={src}
                autoPlay
                controls
              />
            </>
        )
      })
      
  },[props.setplaying])

  return (
    <div className="fixed-bottom">
        <div>{play.title}</div>
        {play}
  </div>
  )
}

export default ReactAudio