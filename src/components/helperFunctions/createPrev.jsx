import { CCard, CCardImage, CCardBody, CCardText, CCardTitle } from '@coreui/react'
import { CCol ,CRow } from '@coreui/react'

export default function createPrev(allShows,open,obj) {

    
    let preview = []

    if (obj){
        preview = obj

    } else {
        
        preview = allShows? allShows.map(prev => {        
            return (
                
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
                
        }): []

    }


    return preview
    
}