

export default function createPrev(allShows,open,obj) {

    // console.log('createPrev')
    let preview = []

    if (obj){
        preview = obj

    } else {
        preview = allShows.map(prev => {        
            return (
                <div
                    key={prev.id}
                    className="preview"
                    onClick={() => open(prev.id, allShows)}
                >                  
                    <div >
                        <img className="preview-image" src={prev.image} alt="" />
                    </div>
                    <div className="preview-text">
                        <h3>{prev.title}</h3>
                        <h5>Seasons: {prev.seasons.length}</h5>
                        <h5>Last updated: {new Date(prev.updated).toUTCString()}</h5>
                        <h5>Genre: {prev.genres? prev.genres.length : 'All'}</h5>
                    </div>
                </div>)
        })

    }


    return preview
    
}