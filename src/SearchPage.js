import React from 'react'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import "./SearchPage.css";
import Img1 from './images/shashi.jpg';
import Img2 from './images/video_images.png';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage_filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <ChannelRow
      image={Img1}
      channel="SHASHI"
      verified
      subs="660K"
      noOfVideos={384}
      description="Descriptions tell the YouTube algorithm and your viewers what the video is about. You can think about the description as two parts - what viewers see before clicking “Show more” on desktop or “more” on mobile and what they see after"
      />
      <hr/>
      <VideoRow
      views="1.4M"
      subs="652K"
      description="A Channel Description also known as a “YouTube About Page” is a brief outline of what type of content you publish on your channel. "
      timestamp="59 seconds ago"
      channel="Start Strong"
      title="The complete YouTube marketing guide for your business"
      image={Img2}
      />
      <VideoRow
      views="1.4M"
      subs="652K"
      description="A Channel Description also known as a “YouTube About Page” is a brief outline of what type of content you publish on your channel. "
      timestamp="59 seconds ago"
      channel="Start Strong"
      title="The complete YouTube marketing guide for your business"
      image={Img2}
      />
      <VideoRow
      views="1.4M"
      subs="652K"
      description="A Channel Description also known as a “YouTube About Page” is a brief outline of what type of content you publish on your channel. "
      timestamp="59 seconds ago"
      channel="Start Strong"
      title="The complete YouTube marketing guide for your business"
      image={Img2}
      />
      <VideoRow
      views="1.4M"
      subs="652K"
      description="A Channel Description also known as a “YouTube About Page” is a brief outline of what type of content you publish on your channel. "
      timestamp="59 seconds ago"
      channel="Start Strong"
      title="The complete YouTube marketing guide for your business"
      image={Img2}
      />
      <VideoRow
      views="1.4M"
      subs="652K"
      description="A Channel Description also known as a “YouTube About Page” is a brief outline of what type of content you publish on your channel. "
      timestamp="59 seconds ago"
      channel="Start Strong"
      title="The complete YouTube marketing guide for your business"
      image={Img2}
      />
      <VideoRow
      views="1.4M"
      subs="652K"
      description="A Channel Description also known as a “YouTube About Page” is a brief outline of what type of content you publish on your channel. "
      timestamp="59 seconds ago"
      channel="Start Strong"
      title="The complete YouTube marketing guide for your business"
      image={Img2}
      />
    </div>
  );
}

export default SearchPage;
