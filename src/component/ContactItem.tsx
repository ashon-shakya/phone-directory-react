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
                Edit
            </button>
            <button onClick={() => {}} className="delete">
                Delete
            </button>
        </li>
    );
};

export default ContactItem;
