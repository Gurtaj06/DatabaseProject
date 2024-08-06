// src/services/contactService.ts
import axios from 'axios';

const API_URL = 'http://localhost:5225/api/contacts';

export default interface Contact {
  id?: number;
  name: string;
  phoneNumber: string;
  email: string;
  notes: string;
}

export const getContacts = async (): Promise<Contact[]> => {
  const response = await axios.get<Contact[]>(API_URL);
  return response.data;
};

export const getContactById = async (id: number): Promise<Contact> => {
  const response = await axios.get<Contact>(`${API_URL}/${id}`);
  return response.data;
};

export const createContact = async (contact: Contact): Promise<Contact> => {
  const response = await axios.post<Contact>(API_URL, contact);
  return response.data;
};

export const updateContact = async (id: number, contact: Contact): Promise<void> => {
  await axios.put(`${API_URL}/${id}`, contact);
};

export const deleteContact = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};
;
