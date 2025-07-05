'use client';

type Props = {
  error: {
    id: number;
    timestamp: string;
    message: string;
    service: string;
    details: string;
  };
  onClose: () => void;
};

export default function ErrorDetailsModal({ error, onClose }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-96 max-w-full">
        <h2 className="text-xl font-semibold mb-2">Error Details</h2>
        <p><strong>Timestamp:</strong> {error.timestamp}</p>
        <p><strong>Service:</strong> {error.service}</p>
        <p><strong>Message:</strong> {error.message}</p>
        <p className="mt-2 whitespace-pre-wrap"><strong>Details:</strong> {error.details}</p>

        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
