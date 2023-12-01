
import { CButton, CFormSelect, CNavbar  } from '@coreui/react'
import { supabase } from '../superbase/client'
import { useNavigate } from 'react-router-dom'

export default function Nav(props) {
    let navigate = useNavigate()

    return (
        <CNavbar  className="nav-container">
            <button onClick={() => props.changepg('Home')}>Home</button>

            <button onClick={() => props.changepg('All')}>All</button>

            <button onClick={() => props.changepg('Favourate')}>Favourate</button>

            <button className="filter">Filter</button>

            <div className="sort">
                {/* <label htmlFor="sorting">sort: </label> */}
                <CFormSelect aria-label="sort" name="sorting" id="sorting" onChange={(e) => props.setSort(e.target.value)}>
                    <option value="none">none</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="oldest">oldest</option>
                    <option value="latest">latest</option>
                </CFormSelect>
            </div>

            <CButton className="button block" type="button" 
                onClick={() => {
                    navigate('/')
                    supabase.auth.signOut()
                }}
            >
                Sign Out
            </CButton>

        </CNavbar >
    )
}