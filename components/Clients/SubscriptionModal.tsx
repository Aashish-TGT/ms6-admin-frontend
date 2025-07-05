'use client';

type Props = {
  currentPlan: string;
  onClose: () => void;
  onSelect: (plan: string) => void;
};

export default function SubscriptionModal({ currentPlan, onClose, onSelect }: Props) {
  const plans = ['Basic', 'Gold', 'Premium'];

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <h2 className="text-xl font-semibold mb-4">Change Subscription</h2>
        <ul className="space-y-2">
          {plans.map((plan) => (
            <li
              key={plan}
              className={`cursor-pointer p-2 rounded border ${
                plan === currentPlan ? 'bg-gray-200' : ''
              }`}
              onClick={() => onSelect(plan)}
            >
              {plan}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-gray-300 hover:bg-gray-400 px-4 py-1 rounded"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
