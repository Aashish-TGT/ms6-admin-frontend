type Log = {
  id: string;
  timestamp: string;
  type: 'info' | 'warning' | 'error';
  message: string;
};

type LogTableProps = {
  logs: Log[];
};

export default function LogTable({ logs }: LogTableProps) {
  const getColor = (type: string) => {
    switch (type) {
      case 'info': return 'bg-blue-500';
      case 'warning': return 'bg-yellow-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <div className="overflow-x-auto bg-white p-4 rounded-xl shadow">
      <h3 className="font-semibold mb-2">System Logs</h3>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-gray-100 text-left text-sm text-gray-600">
            <th className="p-3">Timestamp</th>
            <th className="p-3">Type</th>
            <th className="p-3">Message</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id} className="border-t hover:bg-gray-50">
              <td className="p-3">{log.timestamp}</td>
              <td className="p-3">
                <span className={`text-white px-2 py-1 rounded text-xs ${getColor(log.type)}`}>
                  {log.type.toUpperCase()}
                </span>
              </td>
              <td className="p-3">{log.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
