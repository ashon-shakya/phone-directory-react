import React, { useState, useEffect } from "react";
import { Contact } from "../interface/Contact";
import axios from "axios";
import {
    createContactsResponse,
    getContactsResponse,
} from "../interface/ApiResponse";

interface DirectoryFormProps {
    handleAddUser: (name: string, phone: number) => void;
}

const DirectoryForm: React.FC<DirectoryFormProps> = ({ handleAddUser }) => {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<number>(0);

    return (
        <div className="directory-form">
            <div className="directory-input">
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
                <input
                    type="number"
                    value={phone}
                    onChange={(e) => setPhone(parseInt(e.target.value))}
                    placeholder="Phone number"
                />
            </div>
            <div className="directory-submit">
                <button
                    className="update"
                    onClick={() => {
                        handleAddUser(name, phone);
                    }}
                >
                    Add
                </button>

                <button className="reset" onClick={() => {}}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default DirectoryForm;
