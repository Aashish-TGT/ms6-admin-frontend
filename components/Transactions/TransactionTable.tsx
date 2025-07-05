'use client';

type Transaction = {
  id: string;
  client: string;
  date: string;
  status: string;
  amount: number;
  receiptId: string;
};

type Props = {
  transactions: Transaction[];
};

export default function TransactionTable({ transactions }: Props) {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">ID</th>
          <th className="border p-2">Client</th>
          <th className="border p-2">Receipt</th>
          <th className="border p-2">Amount</th>
          <th className="border p-2">Date</th>
          <th className="border p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((txn) => (
          <tr key={txn.id} className="text-center">
            <td className="border p-2">{txn.id}</td>
            <td className="border p-2">{txn.client}</td>
            <td className="border p-2">{txn.receiptId}</td>
            <td className="border p-2">₹{txn.amount}</td>
            <td className="border p-2">{txn.date}</td>
            <td className="border p-2">
              <span
                className={`px-2 py-1 rounded text-white ${
                  txn.status === 'Success'
                    ? 'bg-green-500'
                    : txn.status === 'Failed'
                    ? 'bg-red-500'
                    : 'bg-yellow-500'
                }`}
              >
                {txn.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
