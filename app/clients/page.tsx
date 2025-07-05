'use client';

import { useState } from 'react';
import SearchBar from '@/components/Clients/SearchBar';
import ClientTable from '@/components/Clients/ClientTable';

const mockClients = [
  { id: 1, name: 'Aashish Traders', email: 'aashish@traders.com', subscription: 'Gold', status: 'active' },
  { id: 2, name: 'CodeMart', email: 'support@codemart.com', subscription: 'Basic', status: 'inactive' },
  { id: 3, name: 'QuickSupply', email: 'hello@quicksupply.com', subscription: 'Premium', status: 'active' },
];

export default function ClientsPage() {
  const [search, setSearch] = useState('');
  const [filteredClients, setFilteredClients] = useState(mockClients);

  const handleSearch = (query: string) => {
    setSearch(query);
    const filtered = mockClients.filter(
      (client) =>
        client.name.toLowerCase().includes(query.toLowerCase()) ||
        client.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredClients(filtered);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Clients</h1>
      <SearchBar search={search} onSearch={handleSearch} />
      <ClientTable clients={filteredClients} />
    </div>
  );
}
