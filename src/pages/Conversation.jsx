import { useEffect, useState } from 'react';

import { Loader2, MessageSquare, SendIcon } from 'lucide-react';

import { getUser } from '../services/users';
import { getAssistantResponse, setToken } from '../services/conversations';

import Sidebar from '../components/Sidebar';
import MobileSideBar from '../components/MobileSidebar';
import ChatBubble from '../components/ChatBubble';
import HistoryBubble from '../components/HistoryBubble';
import ChatHistory from '../components/ChatHistory';

const Conversation = () => {
  const [blur, setBlur] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [getHistory, setGetHistory] = useState(false);
  const [isHistoryLoading, setIsHistoryLoading] = useState(false);

  const [user, setUser] = useState(null);
  const [getHistoryMessages, setGetHistoryMessages] = useState(null);

  const [immediateResponse, setImmediateResponse] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const currUser = window.localStorage.getItem('currentUser');

    if (currUser) {
      const user = JSON.parse(currUser);
      setUser(user);
      setToken(user?.token);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setGetHistory(false);

    try {
      setIsLoading(true);
      const res = await getAssistantResponse({ message });
      setImmediateResponse([...immediateResponse, res]);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
      setMessage('');
    }
  };

  const handleDisplayChatHistory = async () => {
    setGetHistory(true);
    console.log('Take me to history');

    try {
      setIsHistoryLoading(true);
      const userMessages = user ? await getUser(user?.id) : null;

      if (userMessages) {
        setGetHistoryMessages(userMessages?.conversations);
      }
      console.log(getHistoryMessages);
    } catch (err) {
      console.log(err);
      setIsHistoryLoading(false);
    } finally {
      setIsHistoryLoading(false);
    }
  };

  // const demoMessage = [
  //   {
  //     id: 1,
  //     message: 'How big is asia?',
  //     response:
  //       "Asia is the largest continent in terms of land area, covering approximately 44,579,000 square kilometers or 17,212,000 square miles. It occupies about 30% of the Earth's total land area. It is also home to around 60% of the world's population, with over 4.6 billion people.",
  //   },
  //   {
  //     id: 2,
  //     message: 'How big is asia?',
  //     response:
  //       "Asia is the largest continent in terms of land area, covering approximately 44,579,000 square kilometers or 17,212,000 square miles. It occupies about 30% of the Earth's total land area. It is also home to around 60% of the world's population, with over 4.6 billion people.",
  //   },
  // ];

  return (
    <section className="relative h-screen w-full py-6 md:py-8 px-6 md:px-10 overflow-hidden">
      <Sidebar currentPage={'Conversations'} />
      <MobileSideBar
        iconColor={'bg-cyan-600'}
        currentPage={'Conversations'}
        setBlur={setBlur}
      />
      <div
        className={
          blur
            ? 'md:ml-72 flex flex-col gap-y-4 md:blur-none blur-sm'
            : 'md:ml-72 flex flex-col gap-y-4'
        }
      >
        <h1 className="text-lg md:text-2xl font-bold text-cyan-600 bg-cyan-600/10 py-3 md:py-4 justify-center flex items-center gap-4 rounded-lg border-x-4 border-cyan-600">
          <MessageSquare /> Conversations
        </h1>

        <p className="text-xs md:text-sm text-gray-400 text-center font-medium">
          Converse with our improved AI model.
        </p>

        <form
          onSubmit={handleSubmit}
          className="relative flex flex-col gap-y-2 w-full items-center py-2 md:py-4 border-b border-t border-gray-800"
        >
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className=" w-full outline-none border-0 bg-gray-700 md:py-[14px] py-3 px-4 rounded-lg text-gray-300 md:text-sm text-xs placeholder:text-gray-400 placeholder:focus:opacity-75"
            placeholder="Start a converation... ex, how hot is the sun?"
          />
          <button
            type="submit"
            disabled={!message || isLoading}
            className={
              isLoading || !message
                ? 'hidden md:block absolute right-3 top-1/2 -translate-y-1/2 border-0 outline-none px-8 font-medium tracking-wide py-2 text-xs rounded-md bg-gray-950 cursor-not-allowed text-gray-100'
                : 'hidden md:block absolute right-3 top-1/2 -translate-y-1/2 border-0 outline-none px-8 font-medium tracking-wide py-2 text-xs rounded-md bg-gray-950 hover:bg-gray-900 text-gray-100'
            }
          >
            {isLoading ? (
              <span className="flex items-center gap-x-2">
                Conversing...{' '}
                <Loader2 className="h-4 w-4 text-white animate-spin" />
              </span>
            ) : (
              'Converse'
            )}
          </button>
          <button
            disabled={isLoading}
            type="submit"
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 border-0 outline-none px-3 font-medium tracking-wide py-[5px] text-xs rounded-md bg-cyan-700 text-gray-100"
          >
            {!isLoading ? (
              <SendIcon className="h-4 w-4" />
            ) : (
              <Loader2 className="h-4 w-4 text-white animate-spin" />
            )}
          </button>
        </form>

        {!getHistory ? (
          <div className="relative">
            <ChatBubble
              messageArr={immediateResponse ? immediateResponse : null}
              isLoading={isLoading}
              lastText={message}
              textColor={'text-cyan-500'}
            />
            <div className="absolute w-full border rounded-t-md bg-[#0a0a0a] border-gray-800 cursor-pointer opacity-95 hover:opacity-100 flex gap-x-4 items-center justify-center py-2 z-50 top-0 md:top-2 left-0">
              <ChatHistory
                handleDisplayChatHistory={handleDisplayChatHistory}
              />
            </div>
          </div>
        ) : (
          <HistoryBubble
            messageArr={getHistoryMessages}
            isHistoryLoading={isHistoryLoading}
            textColor={'text-cyan-500'}
          />
        )}
      </div>
    </section>
  );
};

export default Conversation;
