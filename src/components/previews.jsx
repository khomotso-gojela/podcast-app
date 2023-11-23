import { useEffect,useState } from "react";
import mergeArrays from "./mergeArrays";
import createPrev from "./createPrev";

export default function Previews(props) {
    const [favObjs,setFavObjs] = useState([])
    const [allShowObjs,setAllShowObjs] = useState([])
    const [all,setAll] = useState([])

    const [previews,setPreviews] = useState([])
    const [allPrevs,setAllPrevs] = useState([])

    
    
    useEffect(() =>{
        setFavObjs(() => props.fav)
    },[props.fav])

    useEffect(() => {
        fetch('https://podcast-api.netlify.app/')
            .then(res => res.json())
            .then(data => {
                const prevs = data.map(prev => {
                    return prev
                const object = (
                    <div
                        key={prev.id}
                        className="preview"
                        onClick={() => props.open(prev.id)}
                    >                  
                        <div >
                            <img className="preview-image" src={prev.image} alt="" />
                        </div>
                        <div className="preview-text">
                            <h3>{prev.title}</h3>
                            <h5>Seasons: {prev.seasons}</h5>
                            <h5>Last updated: {new Date(prev.updated).toUTCString()}</h5>
                            <h5>Genre: {prev.genres}</h5>
                        </div>
                    </div>)
                })

                return setPreviews(() => prevs)
            })
    },[])

    useEffect(() =>{
       
            previews.map(prev => {
                
                const show = fetch(`https://podcast-api.netlify.app/id/${parseInt(prev.id)}`)
                    .then(res => res.json())
                    .then(data => setAllShowObjs(prev => [...prev,data]))
            })

    },[previews])

    useEffect(() =>{
        setAll(mergeArrays(allShowObjs,favObjs))
    },[favObjs])

    useEffect(() =>{
        setAllPrevs(createPrev(all))
    },[all])


    return (
        <>
            {'allPrevs'}
        </>
    )
}