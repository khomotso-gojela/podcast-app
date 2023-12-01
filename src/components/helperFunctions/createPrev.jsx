import { CCard, CCardImage, CCardBody, CCardText, CCardTitle } from '@coreui/react'
import { CCol ,CRow } from '@coreui/react'
import showGenres from './showGenres'

export default function createPrev(allShows,open,obj) {

    
    let preview = []

    if (obj){
        preview = obj

    } else {
        
        preview = allShows? allShows.map(prev => {        
            return (
                
                <CCol className='prev-cont' key={prev.id}>
                    <CCard className="preview" onClick={() => open(prev.id, allShows)}  style={{ width: '18rem' }}>
                        <CCardImage className="preview-image" orientation="top" src={prev.image} />
                        <CCardBody>
                        <CCardTitle>{prev.title}</CCardTitle>
                        <CCardText>
                            Seasons: {prev.seasons.length}                        
                        </CCardText>
                        <CCardText>
                            Last updated: {new Date(prev.updated).toUTCString()}                            
                        </CCardText>
                        <CCardText>
                            Genres: {prev.genres? showGenres(prev.genres) : ''}                            
                        </CCardText>
                        </CCardBody>
                    </CCard>
                </CCol>
            )
                
        }): []

    }


    return preview
    
}