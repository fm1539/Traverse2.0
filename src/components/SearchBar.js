import React, { useState } from 'react'


function SearchBar(props) {

    const searchValHandler = (event) => {
        props.setSearchVal(event.target.value)
    }

    return (
        <div>
        <input
            className="form-control"
            type="search"
            placeholder={props.placeholder}
            onChange={searchValHandler}
            value={props.searchVal}
        ></input>
        </div>
    )

}

export default SearchBar