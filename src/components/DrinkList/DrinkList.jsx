import React from 'react';
import { StyledList } from './DrinkList.styled';

const DrinkList = ({ children }) => {
  return <StyledList>{children}</StyledList>;
};

export default DrinkList;
