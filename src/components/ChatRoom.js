import React from "react";
import "../styles/ChatRoom.css";
import ChatRoomInput from "./ChatRoomInput";
import Messages from "./Messages";

function ChatRoom() {
  return (
    <div className="chatRoom">
      <div className="chatRoom__header">
        <h2 className="chatRoom__headerText">Welcome to the chat room</h2>
      </div>
      <Messages />
      <ChatRoomInput />
    </div>
  );
}

export default ChatRoom;
