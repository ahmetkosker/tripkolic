'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import DesktopNavigation from './components/DesktopNavigation';
import MobileNavigation from './components/MobileNavigation';
import ProfileSection from './components/ProfileSection';
import DetailItem from './components/DetailItem';

export default function ProfilePage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('profile');
  
  const handleLogout = () => {
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <DesktopNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-grow container mx-auto px-4 py-6">
        <div className="space-y-6 mb-20 sm:mb-0">
          
          <ProfileSection title="Company details">
            <div className="flex justify-start items-start gap-x-4 sm:gap-x-12">
              <div className="mb-4 md:mb-0 flex justify-center ">
                <div className="relative sm:size-24 size-14 bg-gray-200 rounded-full flex items-center justify-center">
                  <i className="fas fa-edit text-gray-500 absolute bottom-1 right-1 bg-white p-1 rounded-full"></i>
                </div>
              </div>
              <div className="md:w-3/4 space-y-2">
                <DetailItem label="Operator ID:" value="2324234234" />
                <DetailItem label="Company Number:" value="45353656545456" />
                <DetailItem label="Legal name:" value="Kamil koç co.ltd" />
                <DetailItem label="TAT Number:" value="23/4536536" />
                <DetailItem label="VAT number:" value="34635636356536535" />
                <DetailItem 
                  label="Address:" 
                  value="atatürk bulvan, 1234 sokak ayden apartmanı no:23 gayrettepe istanbul" 
                />
              </div>
            </div>
          </ProfileSection>

          <ProfileSection title="Bank Details">
            <DetailItem label="Account Type" value="Bireysel/şirket hesabı ikisinden birini seçecek" />
            <DetailItem label="Bank name:" value="Kasıkorn bankası İŞtane banka ismi olacak" />
            <DetailItem label="Account Name:" value="Hakan Kızılkaya" />
            <DetailItem label="Account Number" value="3635635635 on haneli olacak" />
          </ProfileSection>

          <ProfileSection title="Contact details">
            <DetailItem label="Company owner name" value="Hakan kızılkaya" />
            <DetailItem label="Phone number" value="+66879977755" />
            <DetailItem label="Office phone number" value="+66758757558" />
            <DetailItem label="Office phone number" value="+66858785858" />
          </ProfileSection>

          <ProfileSection title="Settings">
            <DetailItem label="Change password" value="••••••••••••••" />
            <DetailItem label="Change mail" value="Hakankızıl^^^^^@gmail.com" />
          </ProfileSection>

          <div className="flex justify-end">
            <button 
              onClick={handleLogout} 
              className="flex items-center px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 font-medium text-sm sm:text-base"
            >
              <i className="fas fa-sign-out-alt mr-2"></i> Log out
            </button>
          </div>
        </div>
      </div>

      <MobileNavigation />
    </div>
  );
} 