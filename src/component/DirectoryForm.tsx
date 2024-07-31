import React, { useState, useEffect } from "react";
import { Contact } from "../interface/Contact";

const DirectoryForm: React.FC = ({}) => {
    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    useEffect(() => {}, []);

    const handleSubmit = () => {};

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
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone number"
                />
            </div>
            <div className="directory-submit">
                <button className="update" onClick={handleSubmit}>
                    "Add"
                </button>

                <button className="reset" onClick={() => {}}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default DirectoryForm;
