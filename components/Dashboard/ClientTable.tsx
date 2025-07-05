'use client';

export default function ClientTable() {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">Client</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Subscription</th>
          <th className="border p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">Aashish Traders</td>
          <td className="border p-2">aashish@example.com</td>
          <td className="border p-2">Gold</td>
          <td className="border p-2">Active</td>
        </tr>
        <tr>
          <td className="border p-2">QuickSupply</td>
          <td className="border p-2">quick@supply.com</td>
          <td className="border p-2">Silver</td>
          <td className="border p-2">Inactive</td>
        </tr>
      </tbody>
    </table>
  );
}
