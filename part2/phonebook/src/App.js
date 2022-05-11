import { useState, useEffect } from "react";
import phonesService from './services/phonebook'
import PhoneForm from "./components/PhoneForm";
import ContactList from "./components/ContactList";
import SearchForm from "./components/SearchForm"
import Notification from "./components/Notifaction";
import './index.css'

const App = () => {
  const [phoneBook, setPhoneBook] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [search, setSearch] = useState('')
  const [IDs, setIDs] = useState([])
  const [notifactionMessage, setNotifactionMessage] = useState(null)
  const [color, setColor] = useState({})

  const phoneBooktoShow = search === ''
  ? phoneBook
  : phoneBook.filter((phone) => 
  (phone.name.toLowerCase().includes(search.toLowerCase())))

  const idToSet = IDs.length < 0
  ? 1
  : IDs.at(-1) + 1

  const hook = () =>{
    phonesService.getAll()
    .then((initialPhones)=>{
      setPhoneBook(initialPhones)
      setIDs(initialPhones.map((phone) => phone.id))
    })
  }
  
  useEffect(hook, [])

  const addPhoneNumber = (event) => {
    event.preventDefault()

    const newPhoneObject = {
      name: newName,
      number: newPhone,
      id: idToSet
    }
    console.log(idToSet)
    if (phoneBook.some((contact) => 
    {return contact.name === newPhoneObject.name})){
      if (window
        .confirm("Are you sure you want to update "+ newName +"?")){
          const id = phoneBook.find((phone) => phone.name === newName).id
          const updateObject = {
            name: newName,
            number: newPhone,
            id:id,
          }
          phonesService
          .update(id, updateObject)
          .then(response => {
            setPhoneBook(phoneBook.map(phone => phone.id !==id ? phone:response))
          })
          .catch (error => {
            setNotifactionMessage(`The Information of ${updateObject.name} has been deleted!`)
            setColor({
              color: 'red'
            })
            setTimeout(() => setNotifactionMessage(null), 5000)
          })
      }
      return
    }
    else{
      phonesService.create(newPhoneObject)
      setPhoneBook(phoneBook.concat(newPhoneObject))
      setIDs(IDs.concat(newPhoneObject.id))
      setNewPhone('')
      setNewName('')
      setNotifactionMessage(`The phone number has successfully added!`)
        setColor({
          color: 'green'
        })
        setTimeout(() => setNotifactionMessage(null), 5000)
    }
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const handleNameChange = (event) =>{
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) =>{
    setNewPhone(event.target.value)
  }

  const deleteHandler = (event) => {
    console.log(event.target)
    const id = event.target.value
    if(window.confirm("Are you sure you want to delete this contact?")){
      phonesService.deletePhone(id).then(() => {
        setPhoneBook(phoneBook.filter(phone => phone.id != id))
        setIDs(IDs.filter(phone_id => phone_id != id))
      })
      .catch (error => {
        setNotifactionMessage(`The Information has  already been deleted!`)
        setColor({
          color: 'red'
        })
        setTimeout(() => setNotifactionMessage(null), 5000)
    })
  }
}

  return (
    <div>
      <Notification message={notifactionMessage} color={color}/>
      <SearchForm value={search} onChange={handleSearch}/>
      <PhoneForm onSubmitHandler={addPhoneNumber} 
      nameValue={newName} onNameChangeHandler={handleNameChange} 
      phoneValue={newPhone} onPhoneChangeHandler={handlePhoneChange}/>
      <ContactList contacts={phoneBooktoShow} 
      deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
