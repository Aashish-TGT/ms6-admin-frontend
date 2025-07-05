'use client';

import { useState } from 'react';
import TransactionTable from '@/components/Transactions/TransactionTable';
import FilterBar from '@/components/Transactions/FilterBar';

const mockTransactions = [
  {
    id: 'TXN123',
    client: 'Aashish Traders',
    date: '2025-07-01',
    status: 'Success',
    amount: 1250,
    receiptId: 'R001',
  },
  {
    id: 'TXN124',
    client: 'CodeMart',
    date: '2025-07-02',
    status: 'Failed',
    amount: 560,
    receiptId: 'R002',
  },
  {
    id: 'TXN125',
    client: 'QuickSupply',
    date: '2025-07-03',
    status: 'Pending',
    amount: 980,
    receiptId: 'R003',
  },
];

export default function TransactionsPage() {
  const [filters, setFilters] = useState({
    client: '',
    receiptId: '',
    status: '',
    from: '',
    to: '',
  });

  const filteredData = mockTransactions.filter((txn) => {
    const matchClient = txn.client.toLowerCase().includes(filters.client.toLowerCase());
    const matchReceipt = txn.receiptId.toLowerCase().includes(filters.receiptId.toLowerCase());
    const matchStatus = filters.status ? txn.status === filters.status : true;
    const matchFrom = filters.from ? new Date(txn.date) >= new Date(filters.from) : true;
    const matchTo = filters.to ? new Date(txn.date) <= new Date(filters.to) : true;

    return matchClient && matchReceipt && matchStatus && matchFrom && matchTo;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Transaction Logs</h1>
      <FilterBar filters={filters} setFilters={setFilters} />
      <TransactionTable transactions={filteredData} />
    </div>
  );
}
