import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Line } from 'rc-progress';
import { Loader2, Zap } from 'lucide-react';

import { getUser } from '../services/users';

import { sideBarLinks } from '../utils/navlinks';
import { toast } from 'react-toastify';

const Sidebar = ({
  currentPage,
  handleProModal,
  percentChanged,
  rateLimit,
}) => {
  const [user, setUser] = useState(null);
  const [maxRateLimit, setMaxRateLimit] = useState(null);

  useEffect(() => {
    const currUser = window.localStorage.getItem('currentUser');

    if (currUser) {
      const user = JSON.parse(currUser);
      setUser(user);
    }
  }, []);

  useEffect(() => {
    try {
      const getMaxRateLimit = async () => {
        const userMaxRateLimit = user ? await getUser(user?.id) : null;
        // console.log(userMaxRateLimit);
        return setMaxRateLimit(
          userMaxRateLimit ? userMaxRateLimit?.maxRateLimit : null
        );
      };

      getMaxRateLimit();
    } catch (err) {
      toast.error('Connection Error, check newtork', {
        theme: 'dark',
        autoClose: 3000,
      });
      console.log(err);
    }
  }, [user]);

  return (
    <div className="hidden fixed top-0 left-0 md:flex flex-col h-full w-72 px-4 border-r border-gray-800 py-10 gap-y-12">
      <div className="flex flex-col items-center gap-y-2">
        <Link
          to={'/feed'}
          className="font-extrabold md:inline-block text-transparent text-2xl bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text"
        >
          InquireHub
        </Link>
        <p className="text-gray-300 font-light text-xs">
          Your intelligent web companion
        </p>
      </div>

      <div className="flex flex-col gap-y-6 ">
        {sideBarLinks.map((link) => (
          <div key={link.title}>
            <Link
              to={link.href}
              className={`flex gap-x-4 transition-all ${
                link.title === currentPage ? 'opacity-100' : 'opacity-80'
              } hover:opacity-100 ${link.bgColor} ${
                link.color
              } py-3 px-10 rounded-lg text-sm font-semibold items-center ${
                link.title === currentPage ? link.border : ''
              }`}
            >
              {link.icon}
              {link.title}
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-y-4">
        <div className="flex flex-col items-center gap-y-2">
          <Line
            percent={percentChanged}
            strokeLinecap="round"
            strokeWidth={3}
            trailWidth={3}
            strokeColor="rgb(212, 56, 236)"
            trailColor="#979393"
          />
          <p className="text-sm flex items-center gap-x-2 font-medium text-gray-300">
            {maxRateLimit !== 10 ? 'Free usage:' : 'Pro usage:'}{' '}
            {rateLimit || rateLimit === 0 ? (
              rateLimit
            ) : (
              <Loader2 className="w-3 h-3 text-fuchsia-500 animate-spin" />
            )}{' '}
            / {maxRateLimit ? maxRateLimit : 5}
          </p>
        </div>

        {maxRateLimit !== 10 && (
          <button
            onClick={handleProModal}
            className="border-0 outline-none bg-gradient-to-r from-blue-500 to-pink-500 text-white text-sm font-semibold flex items-center gap-2 py-2 w-full justify-center rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 transition-all"
          >
            Subscribe to Pro <Zap className="h-4 w-4 fill-yellow-500" />{' '}
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
