import React, { useState } from 'react'

function FuseSearch(props) {
const [search,setSearch] = useState()

function handleSearch(e){
    const text = e.target.value
    props.setText(text)
}

  return (
    <div className='searchForm'>
        <form>
            <label htmlFor="search">Search:  </label>
            <br />
            <input 
                type="text" 
                name='search'
                value={search}
                onChange={(e) => handleSearch(e)}
            />
            <br />
            <br />
        </form>
    </div>
  )
}

export default FuseSearch