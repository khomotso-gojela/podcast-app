import { useEffect,useState } from "react"
import Episode from "./Episode"
import Dheader from "./d-header"


export default function Dialog(props) {
    const [show,setShow] = useState({
        pod: {},
        seasons: [],
        episodes: []
    })
    const [season,setSeason] = useState()
    
    
    useEffect(() => {
        setShow({})
        
        console.log('ran')
        props.all.map(data => {

            if (data.id == props.id) {
                setShow(prev => { 

                    const seasonEle = data.seasons.map((seas,index) => {
                        return (
                            <button 
                                key={index}
                                onClick={() => handleSeason(seas.season)}
                            >
                                Season {seas.season}
                            </button>
                        )
                    })

                    let episodeEle = ''

                    data.seasons.map(seas => {
                        
                        if (seas.season == season) {
                            episodeEle = seas.episodes.map((epi,index) => {
                                return (
                                    <Episode 
                                        key={index} 
                                        epi={epi} 
                                        star={epi.fav}
                                        setFav={() => props.setFav(data,season,index)} 
                                        play={props.play}
                                    />
                                )
                            })
                        }
                    })

                    return ({
                    ...prev,
                    pod: data,
                    seasons: seasonEle,
                    episodes: episodeEle
                    })
                })
            } else {
                // console.log('else ran')
            }
        })
    },[props.all,props.updated,season])

    function handleSeason(seas) {
        setSeason(() => seas)
    }

    return(
        <dialog className="dialog" open={props.open}>            
            <button onClick={props.close}>Close</button>
            <Dheader show={show.pod}/>
            <hr/>
            <div className="d-seasons">
                {show.seasons? show.seasons : 'loading...'}
            </div>
            <hr />
            <div className="d-episodes">
                {show.episodes? show.episodes : 'loading...'}
            </div>
            <hr />
        </dialog>
    )
}