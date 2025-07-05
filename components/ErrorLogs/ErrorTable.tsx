'use client';

type Props = {
  errors: {
    id: number;
    timestamp: string;
    message: string;
    service: string;
  }[];
  onViewDetails: (error: any) => void;
};

export default function ErrorTable({ errors, onViewDetails }: Props) {
  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead className="bg-gray-100">
        <tr>
          <th className="border p-2">Timestamp</th>
          <th className="border p-2">Error Message</th>
          <th className="border p-2">Service</th>
          <th className="border p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {errors.map((err) => (
          <tr key={err.id} className="text-center">
            <td className="border p-2">{err.timestamp}</td>
            <td className="border p-2">{err.message}</td>
            <td className="border p-2">{err.service}</td>
            <td className="border p-2">
              <button
                className="text-blue-600 underline"
                onClick={() => onViewDetails(err)}
              >
                View Details
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
