import React from "react";
import "../styles/Searchbar.css";
import Search from "../images/Search.png";
import Profile from "../images/Profile.jpg";

function Searchbar() {
  return (
    <div className="container__searchbar">
      <div className="form">
        <img className="search__icon" src={Search} />
        <input className="searchInput" placeholder="Search " />
      </div>
      <div className="chats">
        {/* {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => ( */}
        <div
          className="userChat"
          //   key={chat[0]}
          //   onClick={() => handleSelect(chat[1].userInfo)}
        >
          <img
            // src={chat[1].userInfo.photoURL}
            src="https://www.thefamouspeople.com/profiles/images/adrien-brody-6.jpg"
            alt=""
          />
          <div className="userChatInfo">
            <span>
              robel
              {/* {chat[1].userInfo.displayName} */}
            </span>
            <p>
              Chat content
              {/* {chat[1].lastMessage?.text} */}
            </p>
          </div>
        </div>
        {/* ))} */}
      </div>
    </div>
  );
}

export default Searchbar;
