import chatbot from '../assets/logo.png';

const Welcome = () => {
  return (
    <div className="flex gap-x-8 px-10 md:px-20">
      <div className="w-full md:w-[60%] flex flex-col gap-y-2 text-center">
        <h3 className="text-2xl md:text-3xl md:inline-block text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text font-bold">
          Your Intelligent Web Companion
        </h3>
        <p className="mt-2 md:mt-4 text-gray-200 leading-6">
          InquireHub is an innovative AI-Powered web application that engages in
          intuitive and accurate conversations with users. Say goodbye to
          generic responses and hello to an interactive and dynamic
          conversational experience.
        </p>
      </div>
      <div className="hidden md:block -mt-4 animate-bounce">
        <img src={chatbot} alt="chatbot2" />
      </div>
    </div>
  );
};

export default Welcome;
