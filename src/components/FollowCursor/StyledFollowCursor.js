import styled from 'styled-components';
export const StyledFollowCursor = styled.div`
  .follow-cursor {
    display: block;
    width: 24px;
    height: 24px;
    border: 1px solid #0d6efd;
    border-radius: 50%;
    transform: translateY(-50%) translateX(-50%);
    position: absolute;
    z-index: 999;
    pointer-events: none;
    transition:
      width 0.64s,
      height 0.64s,
      border-radius 0.64s,
      background 0.64s;
  }

  .follow-cursor_active {
    height: 64px;
    width: 64px;
    border-width: 2px;
    background: rgba(13, 110, 253, 0.32);
  }

  @media (max-width: 991.98px) {
    .follow-cursor {
      display: none;
    }
  }
`;
