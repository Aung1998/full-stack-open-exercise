import React from "react";
import Contact from "./Contact";

const ContactList = ({contacts}) =>{
    return (
        <div>
            <h1>Contact List</h1>
            <ul>{contacts.map((contact) => (
            <Contact key={contact.id} contact={contact}/>
            ))}</ul>
        </div>
    )
}

export default ContactList