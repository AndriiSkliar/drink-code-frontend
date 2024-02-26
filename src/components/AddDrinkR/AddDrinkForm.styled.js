import styled from 'styled-components';

// @media screen and (min-width: 1280px) {
//
//   }

export const AddForm = styled.form`
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 704px;
    position: relative;
    margin: 0 auto;
  }
`;
export const SectionTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 0em;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 56px;
    line-height: 107%;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 64px;
    line-height: 106%;
    margin-bottom: 60px;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  text-align: center;
  justify-content: center;
  border: 2px transparent solid;
  border-radius: 42px;
  padding: 14px 40px;
  margin-bottom: 80px;
  width: 107px;
  height: 46px;

  font-weight: 600;
  font-size: 14px;
  line-height: 129%;
  color: var(--switcher-ball);
  transition: border-color 0.3s ease;
  background-color: var(--link-bg);

  &:hover {
    /* background-color: #f3f3f3; */
    border-color: rgba(64, 112, 205, 0.5);
  }

  @media screen and (min-width: 1280px) {
    border-radius: 42px;
    padding: 18px 44px;
    width: 118px;
    height: 54px;
  }
`;
