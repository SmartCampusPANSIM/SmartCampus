import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyBJEoOlEnKZ60zkyds1Wrh_EVBhRvFrvzQ';

export function useYoutubeData(videoId) {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoTags, setVideoTags] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (!videoId) return;
      try {
        const videoResponse = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: { part: 'snippet', id: videoId, key: API_KEY }
        });
        const snippet = videoResponse.data.items[0].snippet;
        setVideoTitle(snippet.title);
        setVideoTags(snippet.tags || []);
        setDescription(snippet.description);

        const channelResponse = await axios.get('https://www.googleapis.com/youtube/v3/channels', {
          params: { part: 'snippet', id: snippet.channelId, key: API_KEY }
        });
        setAvatarUrl(channelResponse.data.items[0].snippet.thumbnails.default.url);
      } catch (err) {
        console.error('Błąd YouTube API:', err);
      }
    };
    fetchData();
  }, [videoId]);

  return { videoTitle, videoTags, avatarUrl, description };
}