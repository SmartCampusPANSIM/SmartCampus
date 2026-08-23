import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Wystąpił błąd ładowania komponentu:", error, errorInfo);
    
    // Jeśli błąd dotyczy ładowania chunka (częste przy aktualizacjach PWA)
    const isChunkLoadError = error.name === 'ChunkLoadError' 
      || error.message.includes('Failed to fetch dynamically imported module')
      || error.message.includes('Importing a module script failed');
      
    if (isChunkLoadError) {
      // Wymuś twarde przeładowanie strony z serwera, omijając cache
      window.location.reload(true);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100dvh', color: 'light-dark(#183447, #ffffff)', backgroundColor: 'light-dark(#ffffff, #141414)' }}>
          <h2 style={{ marginBottom: '10px' }}>Trwa aktualizacja aplikacji...</h2>
          <p style={{ opacity: 0.7, marginBottom: '20px' }}>Jeśli strona nie odświeży się automatycznie, kliknij przycisk poniżej.</p>
          <button 
            onClick={() => window.location.reload(true)} 
            style={{ 
              padding: '12px 24px', 
              borderRadius: '100px', 
              border: 'none', 
              backgroundColor: '#183447', 
              color: 'white', 
              cursor: 'pointer',
              fontWeight: 500
            }}
          >
            Odśwież stronę
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
