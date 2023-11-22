import { useEffect,useState } from "react";

export default function Previews(props) {
    const [previews,setPreviews] = useState([])

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

    return (
        <>
            {previews}
        </>
    )
}