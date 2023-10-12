import React from "react"
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import HomeIcon from "@material-ui/icons/Home";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HistoryIcon from "@material-ui/icons/History";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import WhatshotOutlinedIcon from "@material-ui/icons/WhatshotOutlined";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import MusicNoteOutlinedIcon from "@material-ui/icons/MusicNoteOutlined";
import MovieOutlinedIcon from "@material-ui/icons/MovieOutlined";
import LiveTvOutlinedIcon from '@material-ui/icons/LiveTvOutlined';
import SportsEsportsOutlinedIcon from "@material-ui/icons/SportsEsportsOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import OutlinedFlagIcon from "@material-ui/icons/OutlinedFlag";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@material-ui/icons/FeedbackOutlined";
import SidebarRow  from "./SidebarRow";
import "./Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar"> 
      <SidebarRow selected Icon={HomeIcon} title="Home"/>
      <SidebarRow Icon={WhatshotOutlinedIcon} title="Trending"/>
      <SidebarRow Icon={SubscriptionsIcon} title="Subscription"/>
      <hr/>
      <SidebarRow Icon={VideoLibraryIcon} title="Library"/>
      <SidebarRow Icon={HistoryIcon} title="History"/>
      <SidebarRow Icon={OndemandVideoIcon} title="Your videos"/>
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later"/>
      <SidebarRow Icon={ThumbUpAltOutlinedIcon} title="Liked videos"/>
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Show more"/>
      <hr/>
      <h5 className="side_view">Explore</h5>
      <SidebarRow Icon={AddShoppingCartOutlinedIcon} title="Shopping"/> 
      <SidebarRow Icon={MusicNoteOutlinedIcon} title="Music"/>
      <SidebarRow Icon={MovieOutlinedIcon} title="Movies"/>
      <SidebarRow Icon={LiveTvOutlinedIcon} title="Live"/>
      <SidebarRow Icon={SportsEsportsOutlinedIcon} title="Gaming"/>
      <hr/>
      <SidebarRow Icon={SettingsOutlinedIcon} title="Settings"/>
      <SidebarRow Icon={OutlinedFlagIcon} title="Report"/>
      <SidebarRow Icon={HelpOutlineOutlinedIcon} title="Help"/>
      <SidebarRow Icon={FeedbackOutlinedIcon} title="Send feedback"/>
    </div>
  );
}
export default Sidebar;
