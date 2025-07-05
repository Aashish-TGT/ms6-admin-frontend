'use client';

import { useState } from 'react';
import ErrorTable from '@/components/ErrorLogs/ErrorTable';
import ErrorDetailsModal from '@/components/ErrorLogs/ErrorDetailsModal';

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
  {
    id: 3,
    timestamp: '2025-07-03 14:40:00',
    message: 'API rate limit exceeded',
    service: 'Analytics Service',
    details: 'Too many requests from IP 192.168.1.5. Throttling applied.',
  },
];

export default function ErrorLogsPage() {
  const [selectedError, setSelectedError] = useState<any>(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Error Logs</h1>
      <ErrorTable errors={mockErrors} onViewDetails={setSelectedError} />
      {selectedError && (
        <ErrorDetailsModal error={selectedError} onClose={() => setSelectedError(null)} />
      )}
    </div>
  );
}
