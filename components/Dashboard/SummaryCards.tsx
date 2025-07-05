'use client';

import CountUp from 'react-countup';

interface SummaryCardsProps {
  totalUsers: number;
  totalClients: number;
  totalReceipts: number;
  errorCount: number;
}

export default function SummaryCards({
  totalUsers,
  totalClients,
  totalReceipts,
  errorCount,
}: SummaryCardsProps) {
  const cardStyle =
    'bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center transition duration-300 hover:scale-105';

  const labelStyle = 'text-gray-500 text-sm mb-1';
  const numberStyle = 'text-4xl font-bold';

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className={cardStyle}>
        <p className={labelStyle}>Total Users</p>
        <h2 className={`${numberStyle} text-blue-600`}>
          <CountUp end={totalUsers} duration={1.5} />
        </h2>
      </div>

      <div className={cardStyle}>
        <p className={labelStyle}>Total Clients</p>
        <h2 className={`${numberStyle} text-green-600`}>
          <CountUp end={totalClients} duration={1.5} />
        </h2>
      </div>

      <div className={cardStyle}>
        <p className={labelStyle}>Total Receipts</p>
        <h2 className={`${numberStyle} text-purple-600`}>
          <CountUp end={totalReceipts} duration={1.5} />
        </h2>
      </div>

      <div className={cardStyle}>
        <p className={labelStyle}>Errors</p>
        <h2 className={`${numberStyle} text-red-600`}>
          <CountUp end={errorCount} duration={1.5} />
        </h2>
      </div>
    </div>
  );
}
