
// src/components/ContactList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactItem from './ContactItem';
import ContactForm from './ContactForm';

interface Contact {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  notes: string;
}

const ContactList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      const response = await axios.get('http://localhost:5225/api/contacts');
      setContacts(response.data);
    };
    fetchContacts();
  }, []);

  const handleEdit = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const handleDelete = async (id: number) => {
    await axios.delete(`http://localhost:5225/api/contacts/${id}`);
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            contact={contact}
            onEdit={() => handleEdit(contact)}
            onDelete={() => handleDelete(contact.id)}
          />
        ))}
      </ul>
      {selectedContact && (
        <ContactForm contact={selectedContact} onSave={() => {
          setSelectedContact(null);
          window.location.reload();
        }} />
      )}
    </div>
  );
};

export default ContactList;
