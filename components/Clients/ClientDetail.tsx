'use client';

import Link from 'next/link';

type Props = {
  client: {
    id: number;
    name: string;
    email: string;
    subscription: string;
    status: string;
  };
};

export default function ClientDetail({ client }: Props) {
  return (
    <div className="border p-4 rounded-md shadow-sm bg-white">
      <p><strong>Name:</strong> {client.name}</p>
      <p><strong>Email:</strong> {client.email}</p>
      <p><strong>Subscription:</strong> {client.subscription}</p>
      <p><strong>Status:</strong> {client.status}</p>

      <Link href={`/clients/${client.id}/edit`} className="text-blue-600 mt-4 inline-block">
        Edit Client Info
      </Link>
    </div>
  );
}
