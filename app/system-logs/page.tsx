'use client';

import { useState } from 'react';
import LogFilterBar from '@/components/SystemLogs/LogFilterBar';
import LogTable from '@/components/SystemLogs/LogTable';

const mockLogs = [
  { id: 1, type: 'error', message: 'Failed to fetch user data', timestamp: '2025-07-03 10:00:00' },
  { id: 2, type: 'warning', message: 'Disk usage 85%', timestamp: '2025-07-03 10:10:00' },
  { id: 3, type: 'info', message: 'Scheduled backup completed', timestamp: '2025-07-03 10:30:00' },
  { id: 4, type: 'error', message: 'Service timeout on /login', timestamp: '2025-07-03 11:00:00' },
  { id: 5, type: 'info', message: 'Admin logged in', timestamp: '2025-07-03 11:20:00' },
  { id: 6, type: 'warning', message: 'CPU usage at 95%', timestamp: '2025-07-03 11:40:00' },
  { id: 7, type: 'error', message: 'Payment gateway error', timestamp: '2025-07-03 12:00:00' },
];

export default function SystemLogsPage() {
  const [typeFilter, setTypeFilter] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 3;

  const filteredLogs = typeFilter
    ? mockLogs.filter((log) => log.type === typeFilter)
    : mockLogs;

  const totalPages = Math.ceil(filteredLogs.length / pageSize);
  const paginatedLogs = filteredLogs.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">System Logs</h1>
      <LogFilterBar typeFilter={typeFilter} setTypeFilter={setTypeFilter} />
      <LogTable logs={paginatedLogs} />

      {/* Pagination Controls */}
      <div className="flex justify-center mt-4 space-x-4">
        <button
          disabled={page === 1}
          onClick={() => setPage((p) => p - 1)}
          className="px-4 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="self-center">
          Page {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((p) => p + 1)}
          className="px-4 py-1 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
