import React from "react";
import Contact from "./Contact";

const ContactList = ({contacts, deleteHandler}) =>{
    return (
        <div>
            <h1>Contact List</h1>
            <ul>{contacts.map((contact, idx) => (
            <Contact key={idx+1} contact={contact} deleteHandler={deleteHandler}/>
            ))}</ul>
        </div>
    )
}

export default ContactList