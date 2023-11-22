

export default function createPrev(props) {

    return {

        "id": props.id,
        "title": props.title,
        "description": props.description,
        "seasons": props.seasons,
        "image": props.image,
        "genres": '',
        "updated": props.updated

    }

    //  (
    //     <div
    //         key={prev.id}
    //         className="preview"
    //         onClick={() => props.open(prev.id)}
    //     >                  
    //         <div >
    //             <img className="preview-image" src={prev.image} alt="" />
    //         </div>
    //         <div className="preview-text">
    //             <h3>{prev.title}</h3>
    //             <h5>Seasons: {prev.seasons}</h5>
    //             <h5>Last updated: {new Date(prev.updated).toUTCString()}</h5>
    //             <h5>Genre: {prev.genres.length}</h5>
    //         </div>
    //     </div>)
    
}