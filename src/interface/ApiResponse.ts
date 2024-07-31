import { Contact } from "./Contact";

export interface getContactsResponse {
    status: boolean;
    message: string;
    data: Contact[];
}

export interface createContactsResponse {
    status: boolean;
    message: string;
    data: Contact;
}