import React from 'react'

const Search = ({value, onChange}) => {
    return (<div>
        <h1>Search country</h1>
        <form>
            <input value={value} onChange={onChange}/>
        </form>
    </div>)
}

export default Search