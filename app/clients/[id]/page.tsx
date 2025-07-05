'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import ClientDetail from '@/components/Clients/ClientDetail';

const mockClients = [
  { id: 1, name: 'Aashish Traders', email: 'aashish@traders.com', subscription: 'Gold', status: 'active' },
  { id: 2, name: 'CodeMart', email: 'support@codemart.com', subscription: 'Basic', status: 'inactive' },
  { id: 3, name: 'QuickSupply', email: 'hello@quicksupply.com', subscription: 'Premium', status: 'active' },
];

export default function ClientDetailPage() {
  const { id } = useParams();
  const [client, setClient] = useState<any>(null);

  useEffect(() => {
    const found = mockClients.find((c) => c.id === Number(id));
    setClient(found);
  }, [id]);

  if (!client) return <p>Client not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Client Details</h1>
      <ClientDetail client={client} />
    </div>
  );
}
