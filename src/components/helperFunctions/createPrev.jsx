import { CCard, CCardImage, CCardBody, CCardText, CCardTitle } from '@coreui/react'
import { CCol ,CRow } from '@coreui/react'

export default function createPrev(allShows,open,obj) {

    // console.log('createPrev')
    let preview = []

    if (obj){
        preview = obj

    } else {
        preview = allShows.map(prev => {        
            return (
                // <div
                //     key={prev.id}
                //     className="preview"
                //     onClick={() => open(prev.id, allShows)}
                // >                  
                //     <div >
                //         <img className="preview-image" src={prev.image} alt="" />
                //     </div>
                //     <div className="preview-text">
                //         <h3>{prev.title}</h3>
                //         <h5>Seasons: {prev.seasons.length}</h5>
                //         <h5>Last updated: {new Date(prev.updated).toUTCString()}</h5>
                //         <h5>Genre: {prev.genres? prev.genres.length : 'All'}</h5>
                //     </div>
                // </div>
                <CCol key={prev.id}>
                    <CCard className="preview" onClick={() => open(prev.id, allShows)}  style={{ width: '18rem' }}>
                        <CCardImage orientation="top" src={prev.image} />
                        <CCardBody>
                        <CCardTitle>{prev.title}</CCardTitle>
                        <CCardText>
                            Seasons: {prev.seasons.length}
                        
                        </CCardText>
                        <CCardText>
                            Last updated: {new Date(prev.updated).toUTCString()}
                            
                        </CCardText>
                        <CCardText>
                            Genre: {prev.genres? prev.genres.length : 'All'}
                            
                        </CCardText>
                        </CCardBody>
                </CCard>
              </CCol>
            )
                
        })

    }


    return preview
    
}