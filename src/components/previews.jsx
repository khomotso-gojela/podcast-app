import { useEffect,useState } from "react";
import mergeArrays from "./helperFunctions/mergeArrays";
import createPrev from "./helperFunctions/createPrev";
import createFav from "./helperFunctions/createFav";
import sortArray from "./helperFunctions/sortArray";
import searchInArray from "./helperFunctions/searchInArray";
import CarouselView from "./carouselView";
import { CContainer,CRow } from '@coreui/react'


export default function Previews(props) {
    const [favObjs,setFavObjs] = useState([]) // from props.fav
    const [allShowObjs,setAllShowObjs] = useState([]) // from previews api
    const [all,setAll] = useState([]) // allShowObjs + favObjs

    const [previews,setPreviews] = useState([]) 
    const [allPrevs,setAllPrevs] = useState([1,2])
    const [allFavs,setAllFavs] = useState([])
  

    
    // passing list with objects of favourate episodes from App
    useEffect(() =>{
        setFavObjs(() => props.fav)
        
    },[props.fav])

    // fetching all previews from an api to setPreviews
    useEffect(() => {
        fetch('https://podcast-api.netlify.app/')
            .then(res => res.json())
            .then(data => {
                return setPreviews(() => data)
            })
    },[])

    // making a shows array containing all shows from previews array
    useEffect(() =>{
        if ((previews.length == 51)) {
            previews.map(prev => {
                
                fetch(`https://podcast-api.netlify.app/id/${parseInt(prev.id)}`)
                .then(res => res.json())
                .then(data => setAllShowObjs(prev => [...prev,data]))
            })
            
        }
    },[previews])

    // making a list containing all shows and fav episodes by merging allShowObjs & favObjs
    useEffect(() =>{
        setAll(mergeArrays(allShowObjs,favObjs))
    },[allShowObjs,favObjs,props.fav])

    // separating fav episodes from the all shows array
    useEffect(() =>{
        // console.log("all:",all)
        setAllFavs(createFav(all))
    },[all,props.fav])

    // making elements from the merged array of objects/allFavs(depends on page), saving to allPrevs 
    useEffect(() =>{
        // console.log("all:",all)
        // console.log('all:',all)
        // console.log('allFavs:',allFavs)
        setAllPrevs(createPrev(props.page == 'Favourate'? 
            sortArray(allFavs,props.sorting):
            sortArray(all,props.sorting), props.open))
    },[all,props.fav,props.page,props.sorting])

  
    return (
        <>
            {props.page == 'Home' && <CarouselView />}
            <CRow lg={{ cols: 3 }} xxl={{ cols: 4}} className="prev-container">
                {props.page != 'Home' && allPrevs}
            </CRow>        
        </>
    )
}