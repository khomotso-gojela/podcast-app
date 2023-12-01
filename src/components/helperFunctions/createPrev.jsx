import { CCard, CCardImage, CCardBody, CCardText, CCardTitle } from '@coreui/react'
import { CCol ,CRow } from '@coreui/react'
import showGenres from './showGenres'

export default function createPrev(allShows,open,obj) {
        
        let preview = allShows && allShows.map(prev => {     
           

            let newprev = ''
            if (prev.item) {
                newprev = prev.item
            } else {
                newprev = prev
            }

            return (
                
                <CCol className='prev-cont' key={newprev.id}>
                    <CCard className="preview" onClick={() => open(newprev.id, allShows)}  style={{ width: '18rem' }}>
                        <CCardImage className="preview-image" orientation="top" src={newprev.image} />
                        <CCardBody>
                        <CCardTitle>{newprev.title}</CCardTitle>
                        <CCardText>
                            Seasons: {newprev.seasons? newprev.seasons.length :''}                        
                        </CCardText>
                        <CCardText>
                            Last updated: {new Date(newprev.updated).toUTCString()}                            
                        </CCardText>
                        <CCardText>
                            Genres: {newprev.genres? showGenres(newprev.genres) : ''}                            
                        </CCardText>
                        </CCardBody>
                    </CCard>
                </CCol>
            )
                
        })
   


    return preview
    
}