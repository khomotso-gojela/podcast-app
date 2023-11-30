import { useEffect,useState } from "react"
import Episode from "./Episode"
import Dheader from "./d-header"
import { CModal, CModalHeader, CModalBody,CPlaceholder } from '@coreui/react'
import Pagination from 'react-bootstrap/Pagination';


export default function Dialog(props) {
    const [show,setShow] = useState({
        pod: {},
        seasons: [],
        episodes: []
    })
    const [season,setSeason] = useState()
    
    
    useEffect(() => {
        // setShow({})
        
        console.log('ran')
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
                <Dheader show={show.pod}/>
            </CModalHeader>

            <CModalBody>
                <Pagination className="d-seasons">{show.seasons? show.seasons : 'loading...'}</Pagination>
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