import { useState } from "react";
import PhoneForm from "./components/PhoneForm";
import ContactList from "./components/ContactList";
import SearchForm from "./components/SearchForm"

const App = (props) => {
  const [phoneBook, setPhoneBook] = useState(props.phoneBook)
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')

  const phoneBooktoShow = search === ''
  ? phoneBook
  : phoneBook.filter((phone) => 
  (phone.name.toLowerCase().includes(search.toLowerCase())))

  const addPhoneNumber = (event) => {
    event.preventDefault()

    const newPhoneObject = {
      name: newName,
      phone: newPhone,
      id: phoneBook.length + 1
    }
    if (phoneBook.some((contact) => 
    {return contact.name === newPhoneObject.name})){
      alert(newPhoneObject.name + " already exist")
      return
    }
    setPhoneBook(phoneBook.concat(newPhoneObject))
    setNewPhone('')
    setNewName('')
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleNameChange = (event) =>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) =>{
    console.log(event.target.value)
    setNewPhone(event.target.value)
  }

  return (
    <div>
      <SearchForm value={search} onChange={handleSearch}/>
      <PhoneForm onSubmitHandler={addPhoneNumber} 
      nameValue={newName} onNameChangeHandler={handleNameChange} 
      phoneValue={newPhone} onPhoneChangeHandler={handlePhoneChange}/>
      <ContactList contacts={phoneBooktoShow}/>
    </div>
  );
}

export default App;
