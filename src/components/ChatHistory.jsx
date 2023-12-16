import { HistoryIcon } from 'lucide-react';

const ChatHistory = ({ handleDisplayChatHistory }) => {
  return (
    <>
      <button
        onClick={handleDisplayChatHistory}
        className="outline-none flex gap-x-4 items-center justify-center"
      >
        <HistoryIcon className="w-4 h-4 " />
        <p className="text-xs">View chats history </p>
      </button>
    </>
  );
};

export default ChatHistory;
