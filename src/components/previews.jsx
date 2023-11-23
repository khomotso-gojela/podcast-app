import { useEffect,useState } from "react";

export default function Previews(props) {
    const [favObjs,setFavObjs] = useState([])
    const [allShowObjs,setAllShowObjs] = useState([])

    const [previews,setPreviews] = useState([])
    const [prevEle,setPresEle] = useState([])

    
    
    // useEffect(() =>{
    //     setFavObjs(() => props.fav)
    // },[props.fav])

    useEffect(() => {
        fetch('https://podcast-api.netlify.app/')
            .then(res => res.json())
            .then(data => {
                const prevs = data.map(prev => {

                return (
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

    // useEffect(() =>{
    //     if (previews.length == 51) {
    //         const objs = previews.map(prev => {
    //             console.log(prev)
    //             fetch(`https://podcast-api.netlify.app/id/${parseInt(prev.id)}`)
    //                 .then(res => res.json())
    //                 .then(data => console.log(data))
    //         })

    //     }

    // },[previews])

    return (
        <>
            {previews}
        </>
    )
}