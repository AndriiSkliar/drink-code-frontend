import { useEffect, useState } from 'react';
import { StyledFollowCursor } from './StyledFollowCursor';

const FollowCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ left: 0, top: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e) => {
    const target = e.target;

    if (target.closest('a') || target.closest('button')) { 
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    setCursorPosition({
      left: e.pageX,
      top: e.pageY,
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
<StyledFollowCursor>
<div
      className={`follow-cursor ${isActive ? 'follow-cursor_active' : ''}`}
      style={{
        left: cursorPosition.left + 'px',
        top: cursorPosition.top + 'px',
      }}
    />
</StyledFollowCursor>
  );
};

export default FollowCursor;
