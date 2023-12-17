import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';

import { Loader2, LogOut, Settings as SettingsIcon, Smile } from 'lucide-react';

import { getUser } from '../services/users';
import { TOTAL_LIMIT } from '../utils/helperfuncs';

import Sidebar from '../components/Sidebar';
import MobileSidebar from '../components/MobileSidebar';
import ProModal from '../components/ProModal';

const Settings = () => {
  const [blur, setBlur] = useState(false);
  const [proModal, setProModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const [user, setUser] = useState(null);
  const [rateLimit, setRateLimit] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const currUser = window.localStorage.getItem('currentUser');

    if (currUser) {
      const user = JSON.parse(currUser);
      setUser(user);
    }
  }, []);

  useEffect(() => {
    const getRateLimit = async () => {
      const userRateLimit = user ? await getUser(user?.id) : null;
      return setRateLimit(userRateLimit ? userRateLimit?.rateLimit : null);
    };

    getRateLimit();
  }, [user]);

  const handleProModal = (e) => {
    e.preventDefault();

    setProModal(true);
  };

  const handleCloseModal = (e) => {
    e.preventDefault();

    setProModal(false);
    setBlur(false);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    try {
      setIsLoggingOut(true);
      window.localStorage.removeItem('currentUser');
    } catch (err) {
      console.log(err);
      setIsLoggingOut(false);
    } finally {
      toast.success('Hope to see you soon.', {
        theme: 'dark',
        autoClose: 4000,
      });
      setTimeout(() => {
        setIsLoggingOut(false);
        navigate('/auth/sign_in');
      }, 5000);
    }
  };

  return (
    <section className="relative h-screen w-full py-6 md:py-8 px-6 md:px-10 overflow-hidden">
      {proModal && <ProModal closeModal={handleCloseModal} />}
      <Sidebar
        currentPage={'Settings'}
        handleProModal={handleProModal}
        rateLimit={rateLimit}
        percentChanged={(100 * rateLimit) / TOTAL_LIMIT}
      />

      <MobileSidebar
        iconColor={'bg-gray-600'}
        currentPage={'Settings'}
        setBlur={setBlur}
        handleProModal={handleProModal}
        rateLimit={rateLimit}
        percentChanged={(100 * rateLimit) / TOTAL_LIMIT}
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
          className={
            !isLoggingOut
              ? 'absolute bottom-4 right-4 text-sm tracking-wide font-semibold flex items-center gap-x-2 border-0 outline-none py-2 px-8 rounded-lg text-white bg-red-600 hover:bg-red-500'
              : 'absolute bottom-4 right-4 text-sm tracking-wide font-semibold flex items-center gap-x-2 border-0 outline-none py-2 px-8 rounded-lg text-white bg-red-500 cursor-not-allowed'
          }
        >
          {isLoggingOut ? (
            <>
              Logging out... <Loader2 className=" w-4 h-4 animate-spin" />
            </>
          ) : (
            <>
              Logout <LogOut className=" w-4 h-4" />
            </>
          )}{' '}
        </button>
      </div>
    </section>
  );
};

export default Settings;
