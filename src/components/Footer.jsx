import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';

import { socialLinks } from '../utils/navlinks';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <section
      className="relative flex flex-col items-center justify-center gap-6 py-14 mt-14 md:mt-24"
      id="contact"
    >
      <div className="flex gap-x-6 items-center">
        {socialLinks.map((link) => (
          <Link to={link.href} key={link.title}>
            {link.icon}
          </Link>
        ))}
      </div>
      <p className="text-sm text-gray-400">
        Copyright ©{new Date().getFullYear()} Victoria Iria
      </p>

      <div className="absolute flex flex-col items-center bottom-3 right-0 md:bottom-6 md:right-12 px-6 gap-y-4 animate-bounce">
        <ArrowUp
          className="h-8 w-8 md:h-10 md:w-10 border rounded-full p-2 hover:bg-gray-900 cursor-pointer"
          onClick={scrollToTop}
        />
      </div>
    </section>
  );
};

export default Footer;
