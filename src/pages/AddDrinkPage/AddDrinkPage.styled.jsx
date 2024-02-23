import styled from 'styled-components';

export const AddTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  line-height: 1.2;
  margin-top: 80px;
  margin-bottom: 40px;

  @media (min-width: 768px) {
    font-size: 56px;
  }

  @media (min-width: 1280px) {
    font-size: 64px;
  }
`;

export const FlexBox = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    gap: 94px;
    margin-bottom: 125px;
  }
`;

export const LinkWrapper = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
  }
`;
