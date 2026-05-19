import { useState, useEffect } from "react";

function ToggleSwitch({ id, onToggle, defaultState = false }) {
    const [isOn, setIsOn] = useState(defaultState);

    // Synchronizacja stanu wewnętrznego z propsem (np. przy starcie aplikacji)
    useEffect(() => {
        setIsOn(defaultState);
    }, [defaultState]);

    const toggle = () => {
        const newState = !isOn;
        setIsOn(newState);
        if (onToggle) {
            onToggle(id, newState); // przekazuje id i nowy stan
        }
    };

    return (
        <div className={`switch ${isOn ? "switch--active" : ""}`} onClick={toggle} id={id}>
            <div className={`slider ${isOn ? "on" : ""}`} />
        </div>
    );
}

export default ToggleSwitch;
