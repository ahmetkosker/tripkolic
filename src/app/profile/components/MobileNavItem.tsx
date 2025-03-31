interface MobileNavItemProps {
  icon: string;
  label: string;
  active?: boolean;
}

export default function MobileNavItem({ icon, label, active = false }: MobileNavItemProps) {
  return (
    <div className={`flex flex-col items-center justify-center py-2 px-4 ${active ? 'text-orange-500' : 'text-gray-500'}`}>
      <i className={`${icon} text-sm sm:text-lg`}></i>
      <span className="text-[10px] sm:text-xs mt-1">{label}</span>
    </div>
  );
} 