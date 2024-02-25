import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AsideContainer = styled.aside`
  @media screen and (min-width: 768px) {
    max-width: 704px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1440px) {
    max-width: 313px;
    margin: 0 0 0 auto;
  }
`;

export const TitlePopularDrinks = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: var(--primary-text-color);
  margin-bottom: 28px;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 40px;
    margin-top: 80px;
  }
`;

export const TitleFollowUs = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  color: var(--primary-text-color);
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 24px;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 32px;
    column-gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: column;
    flex-wrap: nowrap;
    row-gap: 28px;
  }
`;

export const LinkDrink = styled(NavLink)`
  display: flex;
  align-items: flex-start;
  column-gap: 14px;
  &:hover,
  &:focus {
    img {
      -webkit-box-shadow: 0px 0px 17px 1px rgba(14, 20, 92, 1);
      -moz-box-shadow: 0px 0px 17px 1px rgba(14, 20, 92, 1);
      box-shadow: 0px 0px 17px 1px rgba(14, 20, 92, 1);
    }
  }
`;

export const PopDrinkImage = styled.img`
  border-radius: 8px;
  transition: all 400ms ease;
`;

export const NameDrink = styled.h4`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375;
  color: var(--primary-text-color);
  margin-bottom: 8px;
`;

export const DrinkDescription = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28571;
  color: var(--secondary-text-color);
  max-width: 232px;
  min-height: 56px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (min-width: 1440px) {
    line-height: 1.428;
  }
`;
