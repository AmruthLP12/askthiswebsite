import { type Message as TMessage } from "ai/react";
import Message from "./Message";
import { MessageSquare } from "lucide-react";

interface MessagesProps {
  messages: TMessage[];
  isLoading: boolean;
}

const Messages = ({ messages, isLoading }: MessagesProps) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message, i) => (
          <Message
            key={i}
            content={message.content}
            isUserMessage={message.role === "user"}
          />
        ))
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-blue-500" />
          <h3 className="font-semibold text-xl text-white">You&apos;re all set</h3>
          <p className="text-zinc-500 text-sm">
            Ask your first question to get started
          </p>
        </div>
      )}

      {isLoading && (
        <div className="flex justify-center items-center py-4">
          <div className="loader" />
          <p className="text-zinc-500 text-sm">Getting the answer...</p>
        </div>
      )}
    </div>
  );
};

export default Messages;
