'use client';

type Props = {
  search: string;
  onSearch: (query: string) => void;
};

export default function SearchBar({ search, onSearch }: Props) {
  return (
    <input
      type="text"
      placeholder="Search by name or email..."
      value={search}
      onChange={(e) => onSearch(e.target.value)}
      className="w-full p-2 mb-4 border border-gray-300 rounded-md"
    />
  );
}
