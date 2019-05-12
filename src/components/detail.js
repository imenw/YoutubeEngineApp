import React from 'react';
import '../style/style.css';


const Detail = ({video, autoPlay = false}) => {
  if (!video) {
    return (
      <div>Loading...</div>
    )
  }

  let videoId = video.id.videoId;

  let url = 'https://www.youtube.com/embed/' + videoId + (autoPlay && '?rel=0&autoplay=1' || '');
  console.log(url);
  return (
    <div className="video-embed">
      <iframe className="iframe-item" src={url} allow="autoplay" />
      <div className="video-title"> {video.snippet.title}</div>
    </div>
  );
}

export default Detail;
