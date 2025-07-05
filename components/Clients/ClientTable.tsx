'use client';

import Link from 'next/link';

type Client = {
  id: number;
  name: string;
  email: string;
  subscription: string;
  status: string;
};

type Props = {
  clients: Client[];
};

export default function ClientTable({ clients }: Props) {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Subscription</th>
          <th className="border p-2">Status</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {clients.map((client) => (
          <tr key={client.id} className="text-center">
            <td className="border p-2">{client.name}</td>
            <td className="border p-2">{client.email}</td>
            <td className="border p-2">{client.subscription}</td>
            <td className="border p-2">{client.status}</td>
            <td className="border p-2">
              <Link href={`/clients/${client.id}`} className="text-blue-500 hover:underline">
                View
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
