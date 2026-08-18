import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import './CustomSelect.css';

const CustomSelect = ({ options, value, onChange, placeholder, className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Check if iOS
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value) || null;

  if (isIOS) {
    return (
      <div className={`custom_select_wrapper ${className}`}>
        <select 
          className="custom_select_native" 
          value={value} 
          onChange={(e) => onChange(e.target.value)}
        >
          {placeholder && <option value="" disabled>{placeholder}</option>}
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
        <FontAwesomeIcon icon={faChevronDown} className="custom_select_icon" />
      </div>
    );
  }

  return (
    <div className={`custom_select_wrapper ${className}`} ref={containerRef}>
      <div 
        className="custom_select_trigger"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <FontAwesomeIcon icon={faChevronDown} className="custom_select_icon" />
      </div>

      {isOpen && (
        <div className="custom_select_dropdown">
          {options.map(opt => (
            <div 
              key={opt.value}
              className={`custom_select_option ${opt.value === value ? 'selected' : ''}`}
              onClick={() => {
                onChange(opt.value);
                setIsOpen(false);
              }}
            >
              {opt.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
