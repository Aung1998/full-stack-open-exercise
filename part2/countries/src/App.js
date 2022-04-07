import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import CountriestList from "./components/CountriesList";
import CountryView from "./components/CountryView";

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState(false) 

  const hook = () =>{
    axios
    .get('https://restcountries.com/v3.1/all?fields=name,capital,area,languages,flags')
    .then((response)=>{
      setCountries(response.data)
    })
  }

  const handleShow = (event) => {
    setSelected(event.target.value)
  }

  useEffect(hook, [])


  const searchedCountries = search === ''
  ? (<div></div>)
  : countries.filter((country) => 
  (country.name.common.toLowerCase().includes(search.toLowerCase())))

  const countriesToShow = searchedCountries.length === 1
  ? (<CountryView country = {searchedCountries[0]}/>)
  : searchedCountries.length > 10
  ? (<div>Too many countries</div>) 
  : searchedCountries.length > 1
  ? (<CountriestList handleShow={handleShow} selected={selected} countries={searchedCountries}/>) 
  : (<div></div>)

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <Search onChange={handleSearch}/>
      {countriesToShow}
    </div>
  );
}

export default App;
