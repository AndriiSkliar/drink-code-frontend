import styled from 'styled-components';


export const AddDrinkFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
 gap: 60px;
`;

export const AddDrinkFormBtn = styled.button`
  border-radius: 42px;

  background: ${({ theme }) => theme.basicBtnBg};
  padding: 13px 39px;
  border: 1px solid ${({ theme }) => theme.basicBtnBg};

  color: ${({ theme }) => theme.basicBtnText};

  font-weight: 600;
  line-height: 1.2;
  transition: color ${transition};
  transition:
    color ${transition},
    background-color ${transition},
    border-color ${transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.basicBtnTextHover};
    background-color: ${({ theme }) => theme.basicBtnBgHover};
    border-color: ${({ theme }) => theme.basicBtnBorderHover};
  }

  &:disabled {
    color: rgba(243, 243, 243, 0.2);
    background: #434d67;
  }

  @media screen and (min-width: 768px) {
    padding: 17.5px 43px;
    font-size: 16px;
    line-height: 1.125;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 0px;
  }
`;