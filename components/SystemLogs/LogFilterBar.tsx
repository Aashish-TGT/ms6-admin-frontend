'use client';

type Props = {
  typeFilter: string;
  setTypeFilter: (type: string) => void;
};

export default function LogFilterBar({ typeFilter, setTypeFilter }: Props) {
  return (
    <div className="mb-4">
      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">All Types</option>
        <option value="error">Error</option>
        <option value="warning">Warning</option>
        <option value="info">Info</option>
      </select>
    </div>
  );
}
