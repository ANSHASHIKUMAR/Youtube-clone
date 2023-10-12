import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Img1 from './images/shashi.jpg';
import { Link } from "react-router-dom"

function Header() {
  const [inputSearch, setInputSearch] = useState("");
  return (
    <div className="header"> 
      <div className="header_left">
        <MenuIcon/>
        <Link to="/">
          <img 
            className="header_logo" 
            src="data:image/png;base64,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" alt=""/>
        </Link>
      </div>
      <div className="header_input">
        <input 
          onChange={e => setInputSearch(e.target.value)}
          value={inputSearch} 
          placeholder="Search" 
          type="text"
        />
        <Link to={`/search/${inputSearch}`}>
          <SearchIcon className="header_inputButton" />
        </Link>
      </div>
      <div className="header_icons">
        <VideoCallIcon className="header_icon"/>
        <AppsIcon className="header_icon"/>
        <NotificationsIcon className="header_icon"/>  
        <Avatar 
          alt="Shashi" 
          src={Img1}/>
      </div>
    </div>
  )
}
export default Header; 
