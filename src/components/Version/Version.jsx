import React from 'react';

const Version = ({ prefix = "Wersja " }) => {
  return (
    <span>{prefix}{import.meta.env.VITE_APP_VERSION}</span>
  );
};

export default Version;
