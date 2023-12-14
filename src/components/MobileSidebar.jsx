import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Line } from 'rc-progress';

import { MenuIcon, X, Zap } from 'lucide-react';
import { sideBarLinks } from '../utils/navlinks';

const MobileSidebar = ({ iconColor, currentPage, setBlur }) => {
  const [clicked, setClicked] = useState(false);

  const handleCloseSideBar = () => {
    setClicked(false);
    setBlur(false);
  };

  const handleOpenSideBar = () => {
    setClicked(true);
    setBlur(true);
  };

  return (
    <section className="md:hidden absolute top-0 left-0 transition-all z-50">
      <div className="relative">
        {!clicked && (
          <MenuIcon
            onClick={handleOpenSideBar}
            className={`ml-2 mt-[30px] w-10 h-10 text-gray-100 ${iconColor} p-1.5 rounded-full`}
          />
        )}
      </div>

      {clicked && (
        <div className="absolute bg-[#080808] top-0 left-0 h-screen w-[78vw]">
          <X
            onClick={handleCloseSideBar}
            className="absolute right-2 top-3 w-8 h-8 text-gray-200 bg-red-500 p-1.5 rounded-full"
          />

          <div className="flex flex-col h-full p-6 gap-y-8">
            <div className="flex flex-col items-center gap-y-2">
              <Link
                to={'/feed'}
                className="font-extrabold inline-block text-transparent text-2xl bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text"
              >
                InquireHub
              </Link>
              <p className="text-gray-300 font-light text-xs">
                Your intelligent web companion
              </p>
            </div>

            <div className="flex flex-col gap-y-4">
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
                  percent={75}
                  strokeLinecap="round"
                  strokeWidth={4}
                  trailWidth={4}
                  strokeColor="rgb(212, 56, 236)"
                  trailColor="#979393"
                />
                <p className="text-sm font-medium text-gray-300">
                  Free usage: 10 / 20
                </p>
              </div>
              <button className="border-0 outline-none bg-gradient-to-r from-blue-500 to-pink-500 text-white text-sm font-semibold flex items-center gap-2 py-2 w-full justify-center rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-blue-500 transition-all">
                Subscribe to Pro <Zap className="h-4 w-4 fill-yellow-500" />{' '}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MobileSidebar;
