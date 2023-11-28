
import { CFormSelect, CNavbar  } from '@coreui/react'

export default function Nav(props) {

    return (
        <CNavbar  className="nav-container">
            <div onClick={() => props.changepg('Home')}>Home</div>

            <div onClick={() => props.changepg('All')}>All</div>

            <div onClick={() => props.changepg('Favourate')}>Favourate</div>

            <div className="filter">Filter</div>

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

        </CNavbar >
    )
}