import { useEffect,useState } from "react"
import Episode from "./Episode"
import Dheader from "./d-header"

export default function Dialog(props) {
    const [show,setShow] = useState({
        pod: {},
        seasons: [],
        episodes: []
    })
    const [season,setSeason] = useState(0)


    useEffect(() => {
        setShow({})
        if (props.id) {
            fetch(`https://podcast-api.netlify.app/id/${props.id}`)
                .then(res => res.json())
                .then(data => setShow(prev => {

                    const seasonEle = data.seasons.map((seas,index) => {
                        return (
                            <button 
                                key={index}
                                onClick={() => handleSeason(seas.season - 1)}
                            >
                                Season {seas.season}
                            </button>
                        )
                    })

                    const episodeEle = data.seasons[season].episodes.map((epi,index) => {
                        return (
                            <Episode title={epi.title} key={index} setFav={() => props.setFav(data,season,index)} />
                        )
                    })

                    return ({
                    ...prev,
                    pod: data,
                    seasons: seasonEle,
                    episodes: episodeEle
                    })
                }))
        }

    },[props.id,season])

    function handleSeason(seas) {
        setSeason(() => seas)
    }

    return(
        <dialog className="dialog" open={props.open}>
            
            <Dheader show={show.pod}/>

            <hr/>

            <div className="d-seasons">
                {show.seasons? show.seasons : 'loading...'}
            </div>
            <hr />  

            <div className="d-episodes">
                {show.episodes? show.episodes : 'loading...'}
            </div>

            <button onClick={props.close}>Close</button>

        </dialog>
    )
}