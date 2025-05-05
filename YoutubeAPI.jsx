import { useEffect, useState } from 'react';
import axios from 'axios';

export function useYoutubeData(videoId) {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoTags, setVideoTags] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const videoResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet',
            id: videoId,
            key: 'AIzaSyBJEoOlEnKZ60zkyds1Wrh_EVBhRvFrvzQ',
          },
        });

        const snippet = videoResponse.data.items[0].snippet;
        setVideoTitle(snippet.title);
        setVideoTags(snippet.tags || []);

        const channelResponse = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
          params: {
            part: 'snippet',
            id: snippet.channelId,
            key: 'AIzaSyBJEoOlEnKZ60zkyds1Wrh_EVBhRvFrvzQ',
          },
        });

        const avatar = channelResponse.data.items[0].snippet.thumbnails.default.url;
        setAvatarUrl(avatar);
      } catch (err) {
        console.error('Błąd YouTube API:', err);
      }
    };

    fetchData();
  }, [videoId]);

  return { videoTitle, videoTags, avatarUrl };
}
