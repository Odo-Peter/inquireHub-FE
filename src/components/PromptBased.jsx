import chatbot from '../assets/chatbot3.png';

const PromptBased = () => {
  return (
    <div className="mt-8 relative flex flex-row-reverse gap-x-8 px-10 md:px-20 md:mb-16">
      <div className="w-full md:w-1/2 flex flex-col gap-y-2 text-center">
        <h3 className="text-2xl md:text-3xl md:inline-block text-transparent bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text font-bold">
          Prompt - Based AI Responses
        </h3>
        <p className="mt-2 md:mt-4 text-gray-200 leading-6">
          With InquireHub, all you need to do is provide a prompt, and our
          advance AI algorithms will generate insightful and relevant responses.
          Our powerful language models ensure that you recieve intelligent and
          contextual appropriate answers.
        </p>
      </div>
      <div className="hidden md:block absolute -top-[14rem] left-24">
        <img src={chatbot} alt="chatbot2 h-[620px]" />
      </div>
    </div>
  );
};

export default PromptBased;
