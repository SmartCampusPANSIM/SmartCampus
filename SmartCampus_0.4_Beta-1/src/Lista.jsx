import React, { useRef, useEffect, useState } from 'react';
import './Lista.css';
const List = ({ listButtonTop, listButtonBot, choices = [], onSelect }) => {
  const [active, setActive] = useState(false);
  const listRef = useRef(null);
  const listButtonRef = useRef(null);

  useEffect(() => {
    const clickOutside = (event) => {
      const clickedOutsideList =
        listRef.current && !listRef.current.contains(event.target);
      const clickedOutsideButton =
        listButtonRef.current && !listButtonRef.current.contains(event.target);
      if (active && clickedOutsideList && clickedOutsideButton) {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', clickOutside);
    return () => {
      document.removeEventListener('mousedown', clickOutside);
    };
  }, [active]);

  return (
    <section>
      <div
        className="list_choose"
        onClick={() => setActive((prev) => !prev)}
        ref={listButtonRef}
      >
        <div className="list_choose-chosen">
          <div className="list_choose-chosen-info">
            <p>{listButtonTop}</p>
            <div className="list_choose-chosen-info_separate">
              <p>{listButtonBot}</p>
            </div>
          </div>
        </div>
        <svg width="17" height="11" viewBox="0 0 17 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.90088 10.5033L1.26025 3.86267C0.80127 3.40369 0.80127 2.6615 1.26025 2.2074L2.36377 1.10388C2.82275 0.644897 3.56494 0.644897 4.01904 1.10388L8.72608 5.81091L13.4331 1.10388C13.8921 0.644897 14.6343 0.644897 15.0884 1.10388L16.1919 2.2074C16.6509 2.66638 16.6509 3.40857 16.1919 3.86267L9.55127 10.5033C9.10205 10.9623 8.35986 10.9623 7.90088 10.5033Z" fill="white"/>
        </svg>
      </div>

      {active && (
        <div className="list_list" ref={listRef}>
          {choices.map((option, index) => (
            <div
              className="list_choice"
              key={index}
              onClick={() => {
                onSelect(option);
                setActive(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default List;
