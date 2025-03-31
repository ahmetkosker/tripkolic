import { ReactNode } from 'react';

interface ProfileSectionProps {
  title: string;
  children: ReactNode;
}

export default function ProfileSection({ title, children }: ProfileSectionProps) {
  return (
    <div className="bg-white border-2 border-orange-300 rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-sm sm:text-base text-black font-medium">{title}</h3>
        <button className="text-gray-600 hover:text-gray-800 bg-white p-1 rounded-full">
          <i className="fas fa-edit"></i>
        </button>
      </div>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
} 