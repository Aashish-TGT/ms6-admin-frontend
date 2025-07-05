'use client';

import { useState } from 'react';
import SubscriptionModal from './SubscriptionModal';

type Props = {
  client: {
    id: number;
    name: string;
    email: string;
    subscription: string;
    status: string;
  };
};

export default function ClientEditForm({ client }: Props) {
  const [form, setForm] = useState(client);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log('Saving updated client:', form);
    alert('Client info saved (mock).');
  };

  return (
    <div className="space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        placeholder="Client Name"
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        placeholder="Email"
      />
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <div className="flex items-center justify-between">
        <p><strong>Subscription:</strong> {form.subscription}</p>
        <button onClick={() => setShowModal(true)} className="text-blue-500 underline">
          Change Plan
        </button>
      </div>

      <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded">
        Save Changes
      </button>

      {showModal && (
        <SubscriptionModal
          currentPlan={form.subscription}
          onClose={() => setShowModal(false)}
          onSelect={(newPlan) => {
            setForm({ ...form, subscription: newPlan });
            setShowModal(false);
          }}
        />
      )}
    </div>
  );
}
