
// src/components/ContactItem.tsx
import React from 'react';

interface Contact {
  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  notes: string;
}

interface ContactItemProps {
  contact: Contact;
  onEdit: () => void;
  onDelete: () => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onEdit, onDelete }) => {
  return (
    <li>
      <div>
        <strong>{contact.name}</strong>
        <p>{contact.phoneNumber}</p>
        <p>{contact.email}</p>
        <p>{contact.notes}</p>
        <button onClick={onEdit}>Edit</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
};

export default ContactItem;
