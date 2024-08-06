
// src/components/ContactForm.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Contact {
  id?: number;
  name: string;
  phoneNumber: string;
  email: string;
  notes: string;
}

interface ContactFormProps {
  contact?: Contact;
  onSave: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact, onSave }) => {
  const [formData, setFormData] = useState<Contact>({
    name: '',
    phoneNumber: '',
    email: '',
    notes: '',
    ...contact,
  });

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (contact?.id) {
      await axios.put(`http://localhost:5225/api/contacts/${contact.id}`, formData);
    } else {
      await axios.post('http://localhost:5225/api/contacts', formData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="notes" value={formData.notes} onChange={handleChange} placeholder="Notes" />
      <button type="submit">{contact ? 'Update' : 'Add'} Contact</button>
    </form>
  );
};

export default ContactForm;
