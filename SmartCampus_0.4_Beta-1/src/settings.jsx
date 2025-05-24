import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import './settings.css';

// Lista dostępnych tagów, zgodnie z profilem IT
const AVAILABLE_TAGS = [
  'Programowanie', 'AI', 'Sieci', 'Bazy Danych', 'DevOps',
  'Cyberbezpieczeństwo', 'Frontend', 'Backend', 'Chmura',
  'Mobilne', 'Data Science', 'Big Data', 'Machine Learning',
  'Blockchain', 'IoT', 'Testowanie', 'UI/UX', 'Podstawy',
  'Zaawansowane', 'Projekt'
];

export default function ProfileForm() {
  const [formData, setFormData] = useState({ rok: '', grupa: '', tagi: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async user => {
      if (user) {
        const snap = await getDoc(doc(db, 'users', user.uid));
        if (snap.exists()) {
          const { rok, grupa, tagi } = snap.data();
          setFormData({ rok: rok || '', grupa: grupa || '', tagi: Array.isArray(tagi) ? tagi : [] });
        }
      }
      setLoading(false);
    });
    return unsub;
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleTagToggle = tag => {
    setFormData(prev => {
      const selected = prev.tagi.includes(tag)
        ? prev.tagi.filter(t => t !== tag)
        : [...prev.tagi, tag];
      return { ...prev, tagi: selected };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return alert('Zaloguj się, aby zapisać profil.');
    try {
      await setDoc(doc(db, 'users', user.uid), formData, { merge: true });
      alert('Profil zaktualizowany pomyślnie!');
    } catch {
      alert('Wystąpił błąd przy zapisie – spróbuj ponownie.');
    }
  };

  if (loading) return <p className="text-center mt-10">Ładuję dane profilu...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg.jpg')] bg-cover backdrop-blur-sm p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md w-full">
        <h1 className="text-xl font-semibold text-center mb-6">Uzupełnij swój profil</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Rok studiów</label>
            <select name="rok" value={formData.rok} onChange={handleChange} className="w-full p-2 border rounded-lg">
              <option value="">-- wybierz rok --</option>
              <option value="1">1 rok</option>
              <option value="2">2 rok</option>
              <option value="3">3 rok</option>
            </select>
            <p className="text-sm text-gray-500 mt-1">Potrzebujemy roku, aby dostosować materiały.</p>
          </div>

          <div>
            <label className="block mb-1 font-medium">Grupa laboratoryjna</label>
            <select name="grupa" value={formData.grupa} onChange={handleChange} className="w-full p-2 border rounded-lg">
              <option value="">-- wybierz grupę --</option>
              <option value="1">Grupa 1</option>
              <option value="2">Grupa 2</option>
            </select>
            <p className="text-sm text-gray-500 mt-1">Wskaż grupę, do której należysz.</p>
          </div>

          <div>
            <p className="font-medium mb-2">Twoje zainteresowania</p>
            <p className="text-sm text-gray-500 mb-2">Wybierz minimum jeden temat, abyśmy mogli proponować odpowiednie treści.</p>
            <div className="grid grid-cols-2 gap-2">
              {AVAILABLE_TAGS.map(tag => (
                <label key={tag} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.tagi.includes(tag)}
                    onChange={() => handleTagToggle(tag)}
                    className="form-checkbox h-5 w-5"
                  />
                  <span className="ml-1 text-black">{tag}</span>
                </label>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition">
            Zapisz profil
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-500">SmartCampus &mdash; Koło naukowe informatyki stosowanej</p>
      </div>
    </div>
  );
}
