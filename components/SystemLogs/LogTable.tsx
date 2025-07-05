'use client';

type Log = {
  id: number;
  type: string;
  message: string;
  timestamp: string;
};

type Props = {
  logs: Log[];
};

export default function LogTable({ logs }: Props) {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">Timestamp</th>
          <th className="border p-2">Type</th>
          <th className="border p-2">Message</th>
        </tr>
      </thead>
      <tbody>
        {logs.map((log) => (
          <tr key={log.id} className="text-center">
            <td className="border p-2">{log.timestamp}</td>
            <td className="border p-2 capitalize">
              <span
                className={`px-2 py-1 rounded text-white ${
                  log.type === 'error'
                    ? 'bg-red-500'
                    : log.type === 'warning'
                    ? 'bg-yellow-500'
                    : 'bg-blue-500'
                }`}
              >
                {log.type}
              </span>
            </td>
            <td className="border p-2">{log.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
