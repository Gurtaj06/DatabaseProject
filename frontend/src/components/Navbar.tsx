
// components/Navbar.tsx
import React from 'react';

interface NavbarProps {
  onSelect: (selected: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSelect }) => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <button
            className="text-white"
            onClick={() => onSelect('create')}
          >
            Create Contact
          </button>
        </li>
        <li>
          <button
            className="text-white"
            onClick={() => onSelect('list')}
          >
            List Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
