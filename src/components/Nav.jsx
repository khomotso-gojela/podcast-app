import { useState } from "react";

export default function Nav(props) {

    return (
        <div className="nav-container">
            <div onClick={() => props.changepg('All')}>All</div>
            <div onClick={() => props.changepg('Favourate')}>Favourate</div>
            <div className="filter">Filter</div>
            <div className="sort">
                <label htmlFor="sorting">sort: </label>
                <select name="sorting" id="sorting" onChange={(e) => props.setSort(e.target.value)}>
                    <option value="none">none</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                    <option value="oldest">oldest</option>
                    <option value="latest">latest</option>
                </select>
            </div>

        </div>
    )
}