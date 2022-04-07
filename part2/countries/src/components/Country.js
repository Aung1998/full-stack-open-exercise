import React from "react";
import CountryView from "./CountryView";

const Country = ({country, selected, handleShow}) => {
    const showCountry = selected === country.name.common
    ? <CountryView country={country}/>
    : ""

    return (<div>
        {country.name.common} <button type="button" 
    value={country.name.common} onClick ={handleShow}>Show</button>
    {showCountry}
    </div>)
}
export default Country