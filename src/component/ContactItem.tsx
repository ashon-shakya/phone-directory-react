import React from "react";
import { Contact } from "../interface/Contact";

interface ContactItemProps {
    contact: Contact;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
    return (
        <li>
            {contact.name} - {contact.phone}
            <button onClick={() => {}} className="edit">
                <i className="fas fa-edit"></i>
            </button>
            <button onClick={() => {}} className="delete">
                <i className="fas fa-trash"></i>
            </button>
        </li>
    );
};

export default ContactItem;
