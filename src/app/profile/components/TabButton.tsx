import { ReactNode } from 'react';

interface TabButtonProps {
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function TabButton({ icon, label, active, onClick }: TabButtonProps) {
  return (
    <button 
      className={`flex items-center py-4 px-6 border-b-2 font-medium ${
        active ? 'border-orange-500 text-orange-500' : 'border-transparent text-gray-500 hover:text-gray-700'
      }`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
} 