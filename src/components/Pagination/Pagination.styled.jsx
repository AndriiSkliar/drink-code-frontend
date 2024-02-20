import styled from 'styled-components';

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
  gap: 5px;
`;

export const PaginationArrow = styled.button`
  display: block;
  padding-bottom: 2px;
  background-color: transparent;
  border: none;
  color: rgba(243, 243, 243, 0.3);
  font-size: 25px;
`;

export const PaginationButton = styled.button`
  padding: 6px 11px;
  background-color: transparent;
  border: none;
  color: #f3f3f3;
  font-weight: 500;
  font-size: 12px;
  text-align: center;

  &.active {
    background-color: rgba(64, 112, 205, 0.5);
    border-radius: 100%;
  }
`;
export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
