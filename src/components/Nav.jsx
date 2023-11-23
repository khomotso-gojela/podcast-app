import { useState } from "react";

export default function Nav(props) {

    return (
        <div className="nav-container">
            <div onClick={() => props.changepg('All')}>All</div>
            <div onClick={() => props.changepg('Favourate')}>Favourate</div>
            <div className="filter">Filter</div>

        </div>
    )
}