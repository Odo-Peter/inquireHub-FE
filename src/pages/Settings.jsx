import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LogOut, Settings as SettingsIcon, Smile } from 'lucide-react';

import Sidebar from '../components/Sidebar';
import MobileSidebar from '../components/MobileSidebar';

const Settings = () => {
  const [blur, setBlur] = useState(false);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    console.log('clicked');
  };

  return (
    <section className="relative h-screen w-full py-6 md:py-8 px-6 md:px-10 overflow-hidden">
      <Sidebar currentPage={'Settings'} />
      <MobileSidebar
        iconColor={'bg-gray-600'}
        currentPage={'Settings'}
        setBlur={setBlur}
      />
      <div
        className={
          blur
            ? 'md:ml-72 flex flex-col w-full gap-y-4 md:blur-none blur-sm'
            : 'md:ml-72 flex flex-col gap-y-4'
        }
      >
        <h1 className="text-lg md:text-2xl font-bold text-gray-300 bg-gray-300/10 py-3 md:py-4 justify-center flex items-center gap-4 rounded-lg border-x-4 border-gray-400">
          <SettingsIcon /> Settings
        </h1>

        <p className="text-xs md:text-sm text-gray-400 text-center font-medium">
          Manage your account and subscriptions.
        </p>

        <div className="flex flex-col py-16 gap-y-4 items-center justify-center">
          <Smile className="h-16 w-16 text-gray-400" />
          <p className="text-sm text-gray-300">
            More functionalities coming soon
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="absolute bottom-4 right-4 flex items-center gap-x-2 border-0 outline-none py-2 px-8 rounded-lg text-white bg-red-600 hover:bg-red-500"
        >
          Logout <LogOut className=" w-4 h-4" />{' '}
        </button>
      </div>
    </section>
  );
};

export default Settings;
