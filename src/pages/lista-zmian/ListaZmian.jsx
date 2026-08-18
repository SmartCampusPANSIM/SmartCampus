import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@icons/icons';
import ReactMarkdown from 'react-markdown';
import './ListaZmian.css';

function ListaZmian() {
  const navigate = useNavigate();
  const [releases, setReleases] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const token = import.meta.env.VITE_GITHUB_TOKEN;
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        
        const response = await fetch('https://api.github.com/repos/SmartCampusOrg/SmartCampus/releases', { headers });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setReleases(data);
      } catch (err) {
        console.error("Błąd pobierania wydań z GitHuba:", err);
        setError("Nie udało się pobrać historii zmian.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReleases();
  }, []);

  const handleBack = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        navigate(-1);
      });
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="app lista_zmian_container">
      <div className="lista_zmian_content">
        <div className="setting_topBar">
          <button 
            className="lista_zmian_back_button" 
            onClick={handleBack}
          >
            <FontAwesomeIcon icon={Icons.faArrowLeft} /> Wstecz
          </button>
          <h1>Historia zmian</h1>
        </div>

        {isLoading ? (
          <div className="loading_state">Pobieranie danych z GitHub...</div>
        ) : releases.length > 0 ? (
          <div className="releases_list">
            {releases.map((release) => (
              <div key={release.id} className="release_card">
                <div className="release_header">
                  <h2>{release.name || release.tag_name}</h2>
                  <span className="release_date">
                    {new Date(release.published_at).toLocaleDateString('pl-PL', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="release_body markdown_body">
                  {release.body ? (
                    <ReactMarkdown>{release.body}</ReactMarkdown>
                  ) : (
                    "Brak opisu dla tego wydania."
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty_state">Brak opublikowanych aktualizacji.</div>
        )}
      </div>
    </div>
  );
}

export default ListaZmian;
