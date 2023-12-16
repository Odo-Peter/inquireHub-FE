import { Link } from 'react-router-dom';

import { Rocket } from 'lucide-react';

import chatbot from '../assets/chatbot.png';

const LandingHero = () => {
  return (
    <section id="home" className="polygon relative h-[84vh] w-full flex">
      <div className="flex flex-col items-center gap-y-10 pt-12 md:pt-20 px-10 md:px-20">
        <h1 className="text-3xl md:text-4xl lg:text-6xl text-center font-extrabold inline-block text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text z-10">
          Discover the Power of AI-Powered Conversations
        </h1>
        <Link
          to={'/auth/sign_in'}
          className="text-sm md:text-base bg-gradient-to-r w-[90%] md:w-[60%] lg:w-[50%] mt-40 md:mt-24 from-blue-500 to-pink-500 px-6 md:px-10 rounded-full text-white font-bold py-3 z-10 hover:bg-gradient-to-r flex items-center justify-center hover:from-pink-500 hover:to-cyan-500 transition-all tracking-wider"
        >
          Start a Conversation <Rocket className="text-white h-4 w-4 ml-3" />
          {/* <ArrowRight  />{' '} */}
        </Link>
        <div className="absolute top-2 left-4 flex justify-end items-center ">
          <img src={chatbot} alt="chatbot" className="flip opacity-70" />
        </div>
        <div className="absolute -bottom-4 left-0 h-16 w-full bg-[#0a0a0a] blur-md" />
      </div>
    </section>
  );
};

export default LandingHero;
