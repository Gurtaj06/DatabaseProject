// pages/home.tsx
import React, { useState } from 'react';
import ContactCard from '../components/ContactCard';
import DataTableDemo from '../components/List';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'create' | 'list'>('create');

  const handleSelect = (tab: 'create' | 'list') => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <Navbar onSelect={handleSelect} />
      <div className='flex items-center justify-center h-screen'>
        {selectedTab === 'create' && <ContactCard />}
        {selectedTab === 'list' && <DataTableDemo />}
      </div>
    </div>
  );
};

export default Home;

