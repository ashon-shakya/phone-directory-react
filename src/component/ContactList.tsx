import React from "react";
import ContactItem from "./ContactItem";
import { Contact } from "../interface/Contact";

interface ContactListProps {
    contacts: Contact[];
}

const ContactList: React.FC<ContactListProps> = ({ contacts }) => {
    return (
        <div className="directory-list">
            <ul id="contact-list">
                {contacts.map((contact) => (
                    <ContactItem key={contact.id} contact={contact} />
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
