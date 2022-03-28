import React from 'react'

const SearchInput = ({value, onChange}) => {
    return (<div>
        <h1>Search Contact</h1>
        <form>
            <input value={value} onChange={onChange}/>
        </form>
    </div>)
}

export default SearchInput