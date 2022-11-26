import React from "react";
import Profile from "../images/Profile.jpg";
import "../styles/Chats.css";

function Chats() {
  return (
    <div className="chats">
      {/* {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => ( */}
      <div
        className="userChat"
        //   key={chat[0]}
        //   onClick={() => handleSelect(chat[1].userInfo)}
      >
        <div className="img-container">
          <img
            // src={chat[1].userInfo.photoURL}
            src="https://www.thefamouspeople.com/profiles/images/adrien-brody-6.jpg"
            alt=""
          />
        </div>
        <div className="userChatInfo">
          <span>
            robel
            {/* {chat[1].userInfo.displayName} */}
          </span>
          <p>
            Chat one
            {/* {chat[1].lastMessage?.text} */}
          </p>
        </div>
      </div>
      <div
        className="userChat"
        //   key={chat[0]}
        //   onClick={() => handleSelect(chat[1].userInfo)}
      >
        <div className="img-container">
          <img
            // src={chat[1].userInfo.photoURL}
            src="https://www.thefamouspeople.com/profiles/images/adrien-brody-6.jpg"
            alt=""
          />
        </div>
        <div className="userChatInfo">
          <span>
            Chat one
            {/* {chat[1].userInfo.displayName} */}
          </span>
          <p>
            Chat two
            {/* {chat[1].lastMessage?.text} */}
          </p>
        </div>
      </div>
      <div
        className="userChat"
        //   key={chat[0]}
        //   onClick={() => handleSelect(chat[1].userInfo)}
      >
        <div className="img-container">
          <img
            // src={chat[1].userInfo.photoURL}
            src="https://www.thefamouspeople.com/profiles/images/adrien-brody-6.jpg"
            alt=""
          />
        </div>
        <div className="userChatInfo">
          <span>
            robel
            {/* {chat[1].userInfo.displayName} */}
          </span>
          <p>
            Chat three
            {/* {chat[1].lastMessage?.text} */}
          </p>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default Chats;
