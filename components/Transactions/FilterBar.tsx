'use client';

type Props = {
  filters: {
    client: string;
    receiptId: string;
    status: string;
    from: string;
    to: string;
  };
  setFilters: (filters: any) => void;
};

export default function FilterBar({ filters, setFilters }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
      <input
        type="text"
        placeholder="Client name"
        value={filters.client}
        onChange={(e) => setFilters({ ...filters, client: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="text"
        placeholder="Receipt ID"
        value={filters.receiptId}
        onChange={(e) => setFilters({ ...filters, receiptId: e.target.value })}
        className="border p-2 rounded"
      />
      <select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        className="border p-2 rounded"
      >
        <option value="">All Statuses</option>
        <option value="Success">Success</option>
        <option value="Failed">Failed</option>
        <option value="Pending">Pending</option>
      </select>
      <input
        type="date"
        value={filters.from}
        onChange={(e) => setFilters({ ...filters, from: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="date"
        value={filters.to}
        onChange={(e) => setFilters({ ...filters, to: e.target.value })}
        className="border p-2 rounded"
      />
    </div>
  );
}
