import { format, getHours, getMinutes, parseISO } from 'date-fns';

import bot from '../assets/bot.png';
import user from '../assets/hacker.png';
import { LoaderIcon, SmilePlus } from 'lucide-react';

const HistoryBubble = ({ messageArr, isHistoryLoading, textColor }) => {
  return (
    <div className="border border-gray-800 overflow-auto md:h-[55vh] h-[58vh] py-4 md:py-6 md:mt-2 rounded-md">
      {/* Maps all the archived data stored on the DB */}

      {/* Checks if its Loading and render a Loader */}
      {isHistoryLoading ? (
        <div className="h-full w-full flex flex-col items-center justify-center gap-y-2">
          <LoaderIcon className={`h-16 w-16 animate-spin ${textColor}`} />
          <p className="text-sm text-gray-300">Fetching your chat history</p>
          <p className="text-xs text-gray-400">Please wait...</p>
        </div>
      ) : (
        <>
          {messageArr.length === 0 || !messageArr ? (
            <div className="h-full w-full flex flex-col items-center justify-center gap-y-2">
              <SmilePlus className={`h-16 w-16 animate-bounce ${textColor}`} />
              <p className="text-sm text-gray-300">
                You have no history with InquireHub
              </p>
              <p className="text-xs text-gray-400">Start making history...</p>
            </div>
          ) : (
            ''
          )}
          {messageArr ? (
            <div className="px-2 md:px-4 flex flex-col gap-y-6">
              {messageArr.map((msg) => (
                <div key={msg.id} className="flex flex-col-reverse gap-y-6">
                  {/* Chat bubble for the AI */}
                  <div className="flex flex-col gap-y-6 w-full md:w-[85%]">
                    <div className="flex items-end justify-start gap-x-3 md:gap-x-6 w-full">
                      <img
                        src={bot}
                        alt="bot"
                        className="h-5 w-5 md:h-8 md:w-8"
                      />
                      <div className="ai bg-gradient-to-r from-slate-700 to-slate-800 px-2 md:px-3 py-3 text-sm leading-relaxed">
                        {msg.response}
                      </div>
                    </div>
                    <p className="ml-8 md:ml-12 -mt-4 text-xs text-gray-500">
                      {format(parseISO(msg.date), 'MM/d/yy')}{' '}
                      {getHours(parseISO(msg.date))}:
                      {getMinutes(parseISO(msg.date))}{' '}
                      {format(parseISO(msg.date), 'a')}
                    </p>
                  </div>

                  {/* Chat Bubble for the User */}
                  <div className="flex flex-col items-end gap-y-6">
                    <div className="flex items-end justify-end gap-x-3 md:gap-x-6 w-full md:w-[70%]">
                      <div className="user bg-gradient-to-r from-slate-800 to-slate-700 px-2 md:px-3 py-3 text-sm">
                        {msg.message}
                      </div>
                      <img
                        src={user}
                        alt="bot"
                        className="h-5 w-5 md:h-8 md:w-8"
                      />
                    </div>
                    <p className="mr-8 md:mr-12 -mt-4 text-right w-[70%] text-xs text-gray-500">
                      {format(parseISO(msg.date), 'MM/d/yy')}{' '}
                      {getHours(parseISO(msg.date))}:
                      {getMinutes(parseISO(msg.date))}{' '}
                      {format(parseISO(msg.date), 'a')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            'Ooops and some empty page thingy'
          )}
        </>
      )}
    </div>
  );
};

export default HistoryBubble;
