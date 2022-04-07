import React from "react";
import Country from "./Country";

const CountriestList = ({countries, handleShow, selected}) =>{
    return (
        <div>
            <h1>Country List</h1>
            <div>{countries.map((country) => (
            <Country key={country.name.common}
            handleShow={handleShow}
            selected={selected}
             country={country}/>
            ))}</div>
        </div>
    )
}

export default CountriestList