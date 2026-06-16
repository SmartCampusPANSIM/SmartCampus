import React from 'react';
import { useAuth } from '@/context/AuthContext.jsx';
import './ContinueButton.css';

const ContinueButton = ({ onClick }) => {
    const { user } = useAuth();

    return (
        <button className="continueButton" onClick={onClick}>
            {user?.photoURL && (
                <img
                    src={user.photoURL}
                    alt="Profile"
                    className="continueButton-profileImage"
                />
            )}
            <div className="continueButton-textWrapper">
                <div className="continueButton-textWrapper-mainText">Kontynuuj</div>
                <div className="continueButton-textWrapper-bottomText">
                    {`jako ${user?.displayName || user?.email}`}
                </div>
            </div>
        </button>
    );
};

export default ContinueButton;
