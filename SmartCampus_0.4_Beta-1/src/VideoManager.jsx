import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';

export default function VideoManager() {
  const [videoId, setVideoId] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [videos, setVideos] = useState([]);
  
  // Załaduj istniejące wpisy
  useEffect(() => {
    const fetchVideos = async () => {
      const snap = await getDocs(collection(db, 'videos'));
      setVideos(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    };
    fetchVideos();
  }, []);

  const handleAdd = async () => {
    if (!videoId) return;
    const tags = tagsInput.split(',').map(t => t.trim()).filter(Boolean);
    await addDoc(collection(db, 'videos'), { videoId, tags });
    setVideoId(''); setTagsInput('');
    // odśwież listę
    const snap = await getDocs(collection(db, 'videos'));
    setVideos(snap.docs.map(d => ({ id: d.id, ...d.data() })));
  };

  const handleDelete = async (docId) => {
    await deleteDoc(doc(db, 'videos', docId));
    setVideos(videos.filter(v => v.id !== docId));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Zarządzanie filmami</h2>
      <div className="flex space-x-2 mb-4">
        <input
          value={videoId}
          onChange={e => setVideoId(e.target.value)}
          placeholder="Video ID"
          className="border p-2 rounded"
        />
        <input
          value={tagsInput}
          onChange={e => setTagsInput(e.target.value)}
          placeholder="Tagi, rozdzielone przecinkami"
          className="border p-2 rounded flex-1"
        />
        <button onClick={handleAdd} className="bg-green-600 text-white px-4 py-2 rounded">Dodaj</button>
      </div>
      <ul>
        {videos.map(v => (
          <li key={v.id} className="flex justify-between items-center mb-2">
            <span>{v.videoId} — {v.tags.join(', ')}</span>
            <button onClick={() => handleDelete(v.id)} className="text-red-600">Usuń</button>
          </li>
        ))}
      </ul>
    </div>
  );
}