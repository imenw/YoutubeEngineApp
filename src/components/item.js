import React from 'react';
import { truncate } from '../utils.js';

const Item = ({video, onVideoSelect}) => {
  const snippet = video.snippet;
  const imageUrl = snippet.thumbnails.default.url;

  return (
    <li className="item" onClick={() => onVideoSelect(video)}>
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={imageUrl} alt="{title}" />
        </a>
      </div>
      <div className="video-title">
        {truncate(snippet.title)}
      </div>
    </li>
  )
}

export default Item
