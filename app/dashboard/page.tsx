'use client';

import Charts from '@/components/Dashboard/Charts';
import SummaryCards from '@/components/Dashboard/SummaryCards';
import TransactionTable from '@/components/Transactions/TransactionTable';
import ErrorTable from '@/components/ErrorLogs/ErrorTable';

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

const mockErrors = [
  {
    id: 1,
    timestamp: '2025-07-03 14:00:00',
    message: 'Database connection failed',
    service: 'User Service',
    details: 'Timeout occurred while connecting to MySQL database. Check DB credentials.',
  },
  {
    id: 2,
    timestamp: '2025-07-03 14:20:00',
    message: 'Token validation error',
    service: 'Auth Service',
    details: 'JWT signature expired or malformed.',
  },
];

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      {/* Summary Cards */}
      <SummaryCards
        totalUsers={12}
        totalClients={8}
        totalReceipts={50}
        errorCount={3}
      />

      {/* Charts */}
      <Charts />

      {/* Transaction & Error Tables */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Recent Transactions</h2>
          <TransactionTable transactions={mockTransactions} />
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <h2 className="text-lg font-semibold mb-2">Recent Errors</h2>
          <ErrorTable errors={mockErrors} onViewDetails={() => {}} />
        </div>
      </div>
    </div>
  );
}
