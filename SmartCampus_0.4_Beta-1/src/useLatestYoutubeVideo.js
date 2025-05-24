import { useEffect, useState } from 'react';
import axios from 'axios';

const API_KEY = 'AIzaSyBJEoOlEnKZ60zkyds1Wrh_EVBhRvFrvzQ';

export function useLatestYoutubeVideo(channelId) {
  const [videoId, setVideoId] = useState(null);
  const [videoTitle, setVideoTitle] = useState('');
  const [videoTags, setVideoTags] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!channelId) return;

    const fetchLatest = async () => {
      try {
        // 1) Pobierz dane kanału
        const chanRes = await axios.get(
          'https://www.googleapis.com/youtube/v3/channels',
          { params: { part: 'contentDetails,snippet', id: channelId, key: API_KEY } }
        );
        const ch = chanRes.data.items?.[0];
        if (!ch) throw new Error('Kanał nieznaleziony');
        setAvatarUrl(ch.snippet.thumbnails.default.url);

        const uploadsPlaylistId = ch.contentDetails.relatedPlaylists.uploads;
        console.log('uploadsPlaylistId=', uploadsPlaylistId);

        // 2) Spróbuj pobrać z playlistItems
        let vidId;
        try {
          const plRes = await axios.get(
            'https://www.googleapis.com/youtube/v3/playlistItems',
            {
              params: {
                part: 'snippet',
                playlistId: uploadsPlaylistId,
                maxResults: 1,
                key: API_KEY
              }
            }
          );
          const plItem = plRes.data.items?.[0];
          vidId = plItem?.snippet.resourceId.videoId;
        } catch (e) {
          console.warn('playlistItems failed, falling back to search:', e);
        }

        // 3) Fallback: search.list unlisted
        if (!vidId) {
          const searchRes = await axios.get(
            'https://www.googleapis.com/youtube/v3/search',
            {
              params: {
                part: 'snippet',
                channelId,
                order: 'date',
                maxResults: 1,
                key: API_KEY
              }
            }
          );
          vidId = searchRes.data.items?.[0]?.id?.videoId;
        }
        if (!vidId) throw new Error('Nie udało się pobrać videoId');

        setVideoId(vidId);

        // 4) Pobierz szczegóły filmu
        const vidRes = await axios.get(
          'https://www.googleapis.com/youtube/v3/videos',
          {
            params: {
              part: 'snippet',
              id: vidId,
              key: API_KEY
            }
          }
        );
        const snippet = vidRes.data.items?.[0]?.snippet;
        if (!snippet) throw new Error('Film nieznaleziony');
        setVideoTitle(snippet.title);
        setVideoTags(snippet.tags || []);
      } catch (err) {
        console.error('Błąd YouTube API:', err);
        setError(err);
      }
    };

    fetchLatest();
  }, [channelId]);

  return { videoId, videoTitle, videoTags, avatarUrl, error };
}
