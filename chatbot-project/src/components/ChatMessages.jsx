import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage'
import './ChatMessages.css'

export function ChatMessages({ 
    chatMessages }) {
        const chatMesssgesRef = useRef(null);

        useEffect(() => {
            const containerElem = chatMesssgesRef.current;
            if (containerElem) {
              containerElem.scrollTop = containerElem.scrollHeight;
            }
        }, [chatMessages]);

    return (
        <div 
            className="chat-messages-container"
            ref = {chatMesssgesRef}>
            {chatMessages.map((chatMessage) => {
              return (
                <ChatMessage 
                  message={chatMessage.message}
                  sender={chatMessage.sender}
                  key={chatMessage.id}
                />
              );
            })}
        </div>
    );
}

export default ChatMessages;