import React, { useState, useRef, useEffect } from 'react';
import jm from "../../assets/jm.jpg"
import kurt from "../../assets/kurt.jpg"
import jp from "../../assets/jp.jpg"
import adrian from "../../assets/adrian.jpg"
import nichole from "../../assets/nichole.jpg"

const MessageSection = ({ user }) => {
  const [activeChat, setActiveChat] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [typing, setTyping] = useState(false);

  const currentUser = {
    id: 0,
    name: "Current User",
    avatar: "https://placehold.co/50x50"
  };

  const initialMessages = [
    { id: 1, name: "Nichole Alpapara", message: "Pwede niyo po ma-visit yung room set lang po kayo ng schedule sa amin", time: "Today | 04:45 PM", avatar: nichole },
    { id: 2, name: "John Mark", message: "Is the apartment still available?", time: "Today | 05:30 PM", avatar: jm },
    { id: 3, name: "Adrian Rafael", message: "Hello po! gusto ko lang po itanong kung kelan po pwede makita apartment", time: "Today | 05:30 PM", avatar: adrian },
    { id: 4, name: "Kurt Denver", message: "Hi ate open for lease pa rin po ba yung nakapost na apartment niyo dito??", time: "Today | 05:30 PM", avatar: kurt },
    { id: 5, name: "John Patrick", message: "Is the apartment still available?", time: "Today | 05:30 PM", avatar: jp },
  ];

  const initialChatMessages = {
    1: [
      { text: "Hi po! Ask ko lang kung meron po bang heater yung shower niyo po", senderId: 1, time: "04:45 PM" },
      { text: "Hello! Yes po meron po :)", senderId: 0, time: "04:46 PM" },
      { text: "Hala buti naman po. Nilalamig po kasi ako maligo hehe", senderId: 1, time: "04:45 PM" },
      { text: "Pwede niyo po ma-visit yung room set lang po kayo ng schedule sa amin", senderId: 0, time: "04:45 PM" },
    ],
    2: [
      { text: "Is the apartment still available?", senderId: 2, time: "05:30 PM" }
    ],
    3: [
      { text: "Hello po! gusto ko lang po itanong kung kelan po pwede makita apartment", senderId: 3, time: "05:30 PM" }
    ],
    4: [
      { text: "Hi ate open for lease pa rin po ba yung nakapost na apartment niyo dito??", senderId: 4, time: "05:30 PM" }
    ],
    5: [
      { text: "Is the apartment still available?", senderId: 5, time: "05:30 PM" }
    ]
  };

  const [chatMessages, setChatMessages] = useState(initialChatMessages);

  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages, activeChat]);

  const handleChatClick = (id) => {
    setActiveChat(id);
    setTyping(false);
    setMessageInput("");
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;

    const newMessage = {
      text: messageInput,
      senderId: currentUser.id,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prevChatMessages => {
      const updatedMessages = { ...prevChatMessages };
      if (!updatedMessages[activeChat]) {
        updatedMessages[activeChat] = [];
      }
      updatedMessages[activeChat] = [...updatedMessages[activeChat], newMessage];
      return updatedMessages;
    });

    setMessageInput("");
    setTyping(false);
  };

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
    setTyping(true);
  };

  const filteredChats = initialMessages.filter(chat =>
    chat.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="flex h-full">
      <div className="w-2/5 border-r border-gray-300 flex flex-col">
        <div className="p-4 border-b border-gray-300">
          <h2 className="text-xl font-semibold mb-2">All Messages</h2>
          <input 
            type="text" 
            placeholder="Search or start a new chat" 
            className="w-full p-2 border border-gray-300 rounded"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {filteredChats.map((chat) => (
            <div 
              key={chat.id} 
              className={`flex items-center p-4 cursor-pointer ${activeChat === chat.id ? "bg-blue-100" : "hover:bg-gray-100"}`}
              onClick={() => handleChatClick(chat.id)}
            >
              <img 
                src={chat.avatar} 
                alt={chat.name} 
                className="w-12 h-12 rounded-full mr-3"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <span className="font-semibold">{chat.name}</span>
                  <span className="text-sm text-gray-500">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{chat.message}</p>
              </div>
              <button className="ml-2 text-blue-500">⭐️</button>
            </div>
          ))}
        </div>
      </div>
      <div className="w-4/5 flex flex-col">
        {activeChat ? (
          <>
            <div className="bg-white p-4 flex items-center justify-between border-b">
              <div className="flex items-center">
                <img 
                  src={initialMessages.find(chat => chat.id === activeChat).avatar} 
                  alt={initialMessages.find(chat => chat.id === activeChat).name} 
                  className="w-10 h-10 rounded-full mr-3"
                />
                <span className="font-semibold">{initialMessages.find(chat => chat.id === activeChat).name}</span>
              </div>
              <div className="flex items-center">
                <button className="mx-2">⭐️</button>
                <button className="mx-2">🔍</button>
                <button className="mx-2">⋮</button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4 bg-gray-100" ref={chatContainerRef}>
              {chatMessages[activeChat]?.map((message, index) => (
                <div key={index} className={`flex ${message.senderId === currentUser.id ? "justify-end" : "justify-start"} mb-4`}>
                  <div className={`p-3 rounded-lg ${message.senderId === currentUser.id ? "bg-blue-500 text-white" : "bg-gray-300"}`}>
                    {message.text}
                    <div className="text-xs mt-1 text-gray-500">{message.time}</div>
                  </div>
                </div>
              ))}
            </div>
            {typing && <div className="text-sm text-gray-500 px-4 py-2">Typing...</div>}
            <div className="bg-white p-4 flex items-center">
              <button className="mr-2">😊</button>
              <button className="mr-2">📎</button>
              <input 
                type="text" 
                placeholder="Type your message here..." 
                className="flex-1 p-2 border border-gray-300 rounded-lg mr-2"
                value={messageInput}
                onChange={handleInputChange}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSendMessage();
                    e.preventDefault();
                  }
                }}
              />
              <button 
                className="p-2 bg-blue-500 text-white rounded-full"
                onClick={handleSendMessage}
              >
                👍
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a chat to view messages
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageSection;