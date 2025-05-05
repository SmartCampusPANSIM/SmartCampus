import React from 'react';
import './elearning.css';
import { useYoutubeData } from './YoutubeAPI';

function Elearning() {
  const videoId = 'wg9XjfoCYzU';
  const { videoTitle, videoTags, avatarUrl } = useYoutubeData(videoId);

  return (
    <div className="app">
      <div className="recommended_12692">
        <div className="title_recommended_12692">
          <p className="p_title_recommended_12692">Polecane dla ciebie</p>
        </div>

        <div className="video_recommended_12692">
          <iframe
            className="iframe_video_recommended_12692"
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="content_recommended_12692">
          <div className="left_content_recommended_12692">
            {avatarUrl ? (
              <img src={avatarUrl} alt="Avatar" className="avatar" />
            ) : (
              <p>Ładowanie avatara...</p>
            )}
          </div>
          <div className="right_content_recommended_12692">
            <div className="up_right_content_recommended_12692">
              <p className='p_up_right_content_recommended_12692'>{videoTitle}</p>
            </div>
            <div className="down_right_content_recommended_12692">
              <p className='p_down_right_content_recommended_12692'>Tagi: {videoTags.join(', ')}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Elearning;
