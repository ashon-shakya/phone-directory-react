import React, { useState } from "react";
import DirectoryForm from "./DirectoryForm";
import ContactList from "./ContactList";
import { Contact } from "../interface/Contact";
import logo from "../assets/directory-logo.jpg";

const Directory: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [editingContact, setEditingContact] = useState<Contact | null>(null);

    const addContact = (contact: Omit<Contact, "id">) => {
        const newContact = { ...contact, id: Date.now() };
        setContacts([...contacts, newContact]);
    };

    const updateContact = (updatedContact: Contact) => {
        setContacts(
            contacts.map((contact) =>
                contact.id === updatedContact.id ? updatedContact : contact
            )
        );
    };

    const deleteContact = (id: number) => {
        setContacts(contacts.filter((contact) => contact.id !== id));
    };

    const resetEditingContact = () => {
        setEditingContact(null);
    };

    return (
        <div className="directory-container">
            <h1>
                <img src={logo} alt="Phone Directory Logo" /> Phone Directory
            </h1>
            <h2>
                Contact Counter :{" "}
                <span id="contact-counter">{contacts.length}</span>
            </h2>
            <DirectoryForm />
            <ContactList contacts={contacts} />
        </div>
    );
};

export default Directory;
