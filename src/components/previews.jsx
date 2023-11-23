import { useEffect,useState } from "react";
import mergeArrays from "./mergeArrays";
import createPrev from "./createPrev";
import createFav from "./createFav";

export default function Previews(props) {
    const [favObjs,setFavObjs] = useState([])
    const [allShowObjs,setAllShowObjs] = useState([])
    const [all,setAll] = useState([])

    const [previews,setPreviews] = useState([])
    const [allPrevs,setAllPrevs] = useState([1,2])
    const [allFavs,setAllFavs] = useState([])

    
    
    useEffect(() =>{
        setFavObjs(() => props.fav)
    },[props.fav])

    useEffect(() => {
        fetch('https://podcast-api.netlify.app/')
            .then(res => res.json())
            .then(data => {
                return setPreviews(() => data)
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
    },[allShowObjs,favObjs])

    useEffect(() =>{
        // console.log("all:",all)
        setAllPrevs(createPrev(all, props.open))
    },[all,props.fav])

    useEffect(() =>{
        // console.log("all:",all)
        setAllFavs(createFav(all))
    },[all])

  
    return (
        <>
            {allPrevs}
        </>
    )
}