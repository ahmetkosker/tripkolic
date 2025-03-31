import MobileNavItem from './MobileNavItem';

export default function MobileNavigation() {
  return (
    <div className="block sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-md">
      <div className="flex justify-between">
        <MobileNavItem icon="fas fa-calendar-alt" label="Bookings" />
        <MobileNavItem icon="fas fa-file-invoice" label="Invoice" />
        <MobileNavItem icon="fas fa-envelope" label="Messages" />
        <MobileNavItem icon="fas fa-chart-bar" label="Report" />
        <MobileNavItem icon="fas fa-user" label="Profile" active />
      </div>
    </div>
  );
} 