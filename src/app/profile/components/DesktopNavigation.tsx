import { ReactNode } from 'react';

interface TabButtonProps {
  icon: ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

function TabButton({ icon, label, active, onClick }: TabButtonProps) {
  return (
    <button 
      className={`flex items-center py-2 font-medium border-b-2 ${
        active ? 'text-orange-500 border-orange-500' : 'text-gray-500 border-transparent'
      }`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}

interface DesktopNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function DesktopNavigation({ activeTab, setActiveTab }: DesktopNavigationProps) {
  return (
    <div className="bg-white shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-4">
          <TabButton 
            icon={<i className="fas fa-user text-orange-500 mr-2"></i>} 
            label="Profile" 
            active={activeTab === 'profile'} 
            onClick={() => setActiveTab('profile')} 
          />
          <TabButton 
            icon={<i className="fas fa-users text-gray-500 mr-2"></i>} 
            label="Users" 
            active={activeTab === 'users'} 
            onClick={() => setActiveTab('users')} 
          />
          <TabButton 
            icon={<i className="fas fa-box text-gray-500 mr-2"></i>} 
            label="Products" 
            active={activeTab === 'products'} 
            onClick={() => setActiveTab('products')} 
          />
          <TabButton 
            icon={<i className="fas fa-store text-gray-500 mr-2"></i>} 
            label="Seller" 
            active={activeTab === 'seller'} 
            onClick={() => setActiveTab('seller')} 
          />
        </div>
      </div>
    </div>
  );
} 