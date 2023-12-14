import chatbot from '../assets/chatbot2.png';

const Accurate = () => {
  return (
    <div className="mt-8 md:mt-0 relative flex items-center justify-between gap-x-8 px-10 md:px-20">
      <div className="w-full md:w-1/2 flex flex-col gap-y-2 text-center">
        <h3 className="text-2xl md:text-3xl md:inline-block text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text font-bold">
          Intuitive and Accurate
        </h3>
        <p className="mt-2 md:mt-4 text-gray-200 leading-6">
          InquireHub is designed to understand user queries deeply, allowing it
          to provide intuitive responses that address specific needs. Whether
          you are seeking information, looking for recommendations or simply
          engaging in casual conversation, InquireHub has got you covered
        </p>
      </div>
      <div className="hidden md:block">
        <img src={chatbot} alt="chatbot3" />
      </div>
    </div>
  );
};

export default Accurate;
