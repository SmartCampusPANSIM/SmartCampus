import React from 'react';
import LogoFull from '../Logo/LogoFull';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="LoadingSpinner">
            <div className="LoadingSpinner_container">
                <LogoFull />
                <div className="LoadingSpinner_spinner"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
