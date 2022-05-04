import React from "react";

const Contact = ({contact, deleteHandler}) => ((<li>{contact.name} {contact.number} <button onClick={deleteHandler} value={contact.id}>delete</button></li>))

export default Contact