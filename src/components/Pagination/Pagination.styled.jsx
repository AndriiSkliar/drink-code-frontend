import styled from 'styled-components';

export const PaginationList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
  margin-right: 40px;
  gap: 24px;
`;

export const PaginationArrow = styled.button`
  display: block;
  padding-bottom: 2px;
  background-color: transparent;
  border: none;
  color: var(--secondary-text-color);
  font-size: 25px;
`;

export const PaginationButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--primary-text-color);
  font-weight: 500;
  font-size: 12px;
  text-align: center;

  &.active {
    width: 27px;
    height: 27px;
    color: var(--primary-text-color-footer);
    background-color: var(--pagination-color);
    border-radius: 100%;
  }
`;
export const PaginationContainer = styled.div`
  padding-top: 14px;
  padding-bottom: 14px;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
