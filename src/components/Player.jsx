import { useState, useEffect } from "react";

export default function Player(props) {
    const [play,setPlay] = useState(<audio controls></audio>)

    useEffect(() => {
        
        const source = props.setplaying.epi?props.setplaying.epi.file:''
        const title = props.setplaying.epi?props.setplaying.epi.title:''
        console.log(source)

        setPlay(() => {
            return (
                <>
                    <div>{title}</div>
                
                    <audio 
                        key={title}
                        src={source} 
                        autoPlay
                        controls
                    ></audio>
                </>
            )
        })
        
    },[props.setplaying])

    return (
        <div className="player-container">
            {play}        
        </div>
    )

}