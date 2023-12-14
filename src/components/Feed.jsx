import { Link } from 'react-router-dom';

import { sideBarLinks } from '../utils/navlinks';
import { ArrowRight } from 'lucide-react';

const Feed = ({ fullname }) => {
  return (
    <section className="flex flex-col md:h-screen items-center py-8 px-8 md:px-20 gap-y-6 ">
      <h2 className="font-extrabold text-center text-2xl md:text-4xl">
        Welcome to {''}
        <span className="inline-block text-transparent bg-gradient-to-r from-fuchsia-500 to-blue-500 bg-clip-text">
          InquireHub
        </span>{' '}
        <br />
        <span className="inline-block text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text pt-2">
          {fullname}
        </span>
      </h2>
      <p className="text-[13px] md:text-sm text-gray-400 text-center w-full md:w-[60%]">
        InquireHub goes beyond simple chatbot functionalities. It has been
        trained on vast amounts of data to understand complex queries,
        anticipate your needs and provide accurate responses. You will be amazed
        at how well it understands you.
      </p>

      <p className="text-xs md:text-sm text-gray-300 text-center font-semibold">
        Use the the links below to navigate to desired pages.
      </p>

      <div className="flex flex-col gap-y-4 md:gap-y-6 w-full md:w-[60%] pb-10 md:pb-0">
        {sideBarLinks.map((link) => (
          <div key={link.title} className="">
            <Link
              to={link.href}
              className={`relative flex opacity-90 hover:opacity-100 gap-x-4 ${link.bgColor} ${link.color} py-4 px-8 rounded-lg text-sm font-semibold items-center`}
            >
              {link.icon}
              {link.title}
              <ArrowRight className="absolute w-4 h-4 right-4 top-1/2 -translate-y-1/2" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feed;
