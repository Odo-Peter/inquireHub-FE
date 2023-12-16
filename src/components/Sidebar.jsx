import { Link } from 'react-router-dom';

import { Line } from 'rc-progress';

import { sideBarLinks } from '../utils/navlinks';
import { Zap } from 'lucide-react';

const Sidebar = ({
  currentPage,
  handleProModal,
  percentChanged,
  rateLimit,
}) => {
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
            Free usage: {rateLimit} / 2
          </p>
        </div>
        <button
          onClick={handleProModal}
          className="border-0 outline-none bg-gradient-to-r from-blue-500 to-pink-500 text-white text-sm font-semibold flex items-center gap-2 py-2 w-full justify-center rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 transition-all"
        >
          Subscribe to Pro <Zap className="h-4 w-4 fill-yellow-500" />{' '}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
