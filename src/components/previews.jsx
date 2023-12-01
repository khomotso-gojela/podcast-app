import { useEffect,useState } from "react";
import mergeArrays from "./helperFunctions/mergeArrays";
import createPrev from "./helperFunctions/createPrev";
import createFav from "./helperFunctions/createFav";
import sortArray from "./helperFunctions/sortArray";
import searchInArray from "./helperFunctions/searchInArray";
import CarouselView from "./carouselView";
import { CContainer,CRow } from '@coreui/react'
import { mergeStrips } from './helperFunctions/mergeStrips'
import stripArray from "./helperFunctions/stripArray";
import searchArray from "./fuse/searchPattern";


export default function Previews(props) {
    const [favObjs,setFavObjs] = useState([]) // from props.fav
    const [allShowObjs,setAllShowObjs] = useState([]) // from previews api
    const [all,setAll] = useState([]) // allShowObjs + favObjs

    const [previews,setPreviews] = useState([]) 
    const [allPrevs,setAllPrevs] = useState([1,2])
    const [allFavs,setAllFavs] = useState([])  

    
    // passing list with objects of favourate episodes from App
    useEffect(() =>{
        setFavObjs(() => stripArray(props.fav))
        
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
        
        setAll(mergeStrips(allShowObjs,favObjs))
    },[allShowObjs,favObjs,props.fav])

    // separating fav episodes from the all shows array
    useEffect(() =>{
        setAllFavs(createFav(all))
    },[all,props.fav])

    // making elements from the merged array of objects/allFavs(depends on page), saving to allPrevs 
    useEffect(() =>{
        
        setAllPrevs(createPrev(props.page == 'Favourate'? 
            sortArray(searchArray(allFavs,props.searchText),props.sorting):
            sortArray(searchArray(all,props.searchText),props.sorting), props.open));

    },[all,props.fav,props.page,props.sorting,props.searchText])
  
    return (
        <>
            {props.page == 'Home' && <CarouselView all={all} />}
            <CRow lg={{ cols: 3 }} xxl={{ cols: 4}} className="prev-container">
                {props.page != 'Home' && allPrevs}
            </CRow>        
        </>
    )
}