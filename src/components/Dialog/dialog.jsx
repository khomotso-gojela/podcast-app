import { useEffect,useState } from "react"
import Episode from "./Episode"
import Dheader from "./d-header"
import { CModal, CModalHeader, CModalBody,CPlaceholder } from '@coreui/react'
import Pagination from 'react-bootstrap/Pagination';
import showGenres from "../helperFunctions/showGenres";

export default function Dialog(props) {
    const [show,setShow] = useState({
        pod: {},
        seasons: [],
        episodes: []
    })
    const [season,setSeason] = useState()
    const [seasonObj,setSeasonObj] = useState(null)
    
    
    useEffect(() => {
        
        props.all.map(data => {

            if (data.id == props.id) {
                setShow(prev => { 

                    const seasonEle = data.seasons.map((seas,index) => {
                        return (

                            <Pagination.Item onClick={() => handleSeason(seas.season)} key={index} >
                                {seas.season}
                            </Pagination.Item>
                        )
                    })

                    let episodeEle = ''

                    data.seasons.map(seas => {
                        
                        if (seas.season == season) {
                            setSeasonObj(seas)
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
    },[props.all,props.updated,season,props.open])

    function handleSeason(seas) {
        setSeason(() => seas)
    }

    return(
       
        <CModal
            size="xl"
            visible={props.open}
            onClose={props.close}
            aria-labelledby="OptionalSizesExample1"
            >
            <CModalHeader>
                <div className='d-header'>
                
                <img className="dh-image" src={show.pod? show.pod.image : 'loading...'} alt="" />
                
                <div className="dh-text">
                    <h2>{show.pod? show.pod.title : 'loading...'}</h2>
                    
                </div>
                
            </div>
            </CModalHeader>

            <CModalBody>
                <Pagination className="d-seasons">{show.seasons? show.seasons : 'loading...'}</Pagination>
                <div> | Season {season} | {show.episodes.length} episodes</div>
                <hr />
                {show.episodes? show.episodes :
                    <>
                        <CPlaceholder xs={6} />
                        <CPlaceholder className="w-75" />
                        <CPlaceholder style={{ width: '30%'}} />
                    </>
                 }
            </CModalBody>
        </CModal>
    )
}