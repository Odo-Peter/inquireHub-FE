import { Link } from 'react-router-dom';
import services from '../assets/services.png';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  return (
    <div className=" flex flex-col items-center w-full gap-y-4 md:gap-y-6 px-10 md:px-20 mb-6 md:mb-10">
      <div className=" flex flex-col md:flex-row items-center  gap-x-8 ">
        <div className="w-full md:w-[60%] flex flex-col gap-y-2 text-center">
          <h3 className="text-2xl md:text-3xl md:inline-block text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text font-bold">
            Seamless Integration
          </h3>
          <p className="mt-4 text-gray-200 leading-6">
            InquireHub seamlessly integrates into your existing web applications
            or platforms. With our easy-to-use API, you can enhance your user
            experience by providing them with an interactive conversational
            interface powered by cutting-edge AI technology
          </p>
        </div>
        <div className="">
          <img src={services} alt="services" />
        </div>
      </div>
      <Link
        to={'/'}
        className="w-full md:w-[60%] border border-cyan-900 hover:bg-cyan-800 md:px-10 rounded-full text-white font-bold py-3 z-10 text-sm md:text-base flex items-center justify-center transition-all tracking-wider"
      >
        API Docs <ArrowRight className="text-white h-4 w-4 ml-3" />
      </Link>
    </div>
  );
};

export default Services;
