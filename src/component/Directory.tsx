import React, { useEffect, useState } from "react";
import DirectoryForm from "./DirectoryForm";
import ContactList from "./ContactList";

import { Contact } from "../interface/Contact";
import {
    createContactsResponse,
    getContactsResponse,
} from "../interface/ApiResponse";
import logo from "../assets/directory-logo.jpg";
import axios from "axios";

const Directory: React.FC = () => {
    const [contacts, setContacts] = useState<Contact[]>([]);

    const fetchContact = async () => {
        const response = await axios.get<getContactsResponse>(
            "http://localhost:3000/api/phone-directory"
        );

        console.log(response.data);
        setContacts(response.data.data);
    };

    const handleAddUser = async (name: string, phone: number) => {
        const newContact: Contact = {
            name,
            phone,
        };

        const response = await axios.post<createContactsResponse>(
            "http://localhost:3000/api/phone-directory",
            newContact
        );

        setContacts((prevContacts) => [...prevContacts, response.data.data]);
    };

    useEffect(() => {
        fetchContact();
    }, []);

    return (
        <div className="directory-container">
            <h1>
                <img src={logo} alt="Phone Directory Logo" /> Phone Directory
            </h1>
            <h2>
                Contact Counter :{" "}
                <span id="contact-counter">{contacts.length}</span>
            </h2>
            <DirectoryForm handleAddUser={handleAddUser} />
            <ContactList contacts={contacts} />
        </div>
    );
};

export default Directory;
