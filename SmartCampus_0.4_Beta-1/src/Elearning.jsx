// src/Elearning.jsx
import React, { useEffect, useState } from 'react';
import './elearning.css';
import { useYoutubeData } from './YoutubeAPI';
import { auth, db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';

export default function Elearning() {
  const [userTags, setUserTags] = useState([]);
  const [videos, setVideos] = useState([]);
  const [recommended, setRecommended] = useState(null);
  const [loading, setLoading] = useState(true);

  // 1) Pobierz tagi użytkownika
  useEffect(() => {
    (async () => {
      const u = auth.currentUser;
      if (u) {
        const snap = await getDocs(collection(db, 'users'));
        const doc = snap.docs.find(d => d.id === u.uid);
        if (doc) setUserTags(doc.data().tagi || []);
      }
      setLoading(false);
    })();
  }, []);

  // 2) Pobierz wszystkie filmy
  useEffect(() => {
    (async () => {
      const snap = await getDocs(collection(db, 'videos'));
      setVideos(snap.docs.map(d => d.data()));
    })();
  }, []);

  // 3) Wybierz rekomendowany film
  useEffect(() => {
    if (!loading && videos.length > 0) {
      const scored = videos.map(v => ({
        ...v,
        score: v.tags.filter(tag => userTags.includes(tag)).length
      }));
      scored.sort((a, b) => b.score - a.score);
      setRecommended(scored[0]);
    }
  }, [loading, userTags, videos]);

  // Hook YouTube
  const videoId = recommended?.videoId || '';
  const { title, avatar } = useYoutubeData(videoId);

  if (loading || !recommended) {
    return <p>Ładowanie rekomendacji…</p>;
  }

  // Grupuj po tagach
  const videosByTag = videos.reduce((acc, video) => {
    video.tags.forEach(tag => {
      if (!acc[tag]) acc[tag] = [];
      acc[tag].push(video);
    });
    return acc;
  }, {});

  return (
    <div className="app">
      {/* Polecany film */}
      <section className="recommended_12692">
        <p className="p_title_recommended_12692">Polecane dla Ciebie</p>
        <div className="video_recommended_12692">
          <iframe
            className="iframe_video_recommended_12692"
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="content_recommended_12692">
          {avatar && (
            <div className="left_content_recommended_12692">
              <img src={avatar} alt="Avatar kanału" className="avatar" />
            </div>
          )}
          <div className="right_content_recommended_12692">
            <p className="p_up_right_content_recommended_12692">{title}</p>
          </div>
        </div>
      </section>

      {/* Kategorie posegregowane po tagach z kolorami */}
      {Object.entries(videosByTag).map(([tag, vids]) => {
        const tagClass = tag.toLowerCase().replace(/\s+/g, '-');
        return (
          <section
            key={tag}
            className={`category-section category-${tagClass}`}
          >
            <h2 className={`category-title category-title-${tagClass}`}>
              Kategoria: {tag}
            </h2>
            <div className="category-videos">
              {vids.map(v => (
                <div key={v.videoId} className="video-card">
                  <iframe
                    className="iframe_video_recommended_12692"
                    src={`https://www.youtube.com/embed/${v.videoId}?rel=0`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                  <div className="video-tags">
                    {v.tags.map(tagItem => {
                      const cls = tagItem.toLowerCase().replace(/\s+/g, '-');
                      return (
                        <span
                          key={tagItem}
                          className={`video-tag video-tag-${cls}`}
                        >
                          {tagItem}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
