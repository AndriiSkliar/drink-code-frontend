import styled from 'styled-components';

export const SubscrForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 335px;

  @media (min-width: 768px) {
    max-width: 309px;
  }
`;

export const SubscrFormText = styled.p`
  line-height: 1.33;
  margin-bottom: 24px;
  color: var(--primary-text-color-footer);

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const SubscrFormInput = styled.input`
  display: block;
  margin-bottom: 18px;
  color: var(--primary-text-color-footer);
  width: 100%;
  height: 56px;
  border-radius: 200px;
  margin-bottom: 18px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  padding: 21px 24px;
  transition: border 250ms linear;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  &::placeholder {
    color: var(--primary-text-color-footer);
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    border: 1px solid rgba(243, 243, 243, 0.5);
  }
`;

export const SubscrFormBtn = styled.button`
  width: 100%;
  height: 56px;
  border-radius: 200px;
  border: 1px solid rgba(243, 243, 243, 0.2);
  background-color: transparent;
  color: var(--primary-text-color-footer);
  padding: 20px 24px;
  font-size: 16px;
  font-weight: 600;

  transition:
    border 250ms linear,
    color 250ms linear,
    background-color 250ms linear;

  @media (min-width: 768px) {
    font-size: 17px;
  }

  &:hover,
  &:focus,
  &:active {
    border: 1px solid var(--primary-text-color-footer);
    color: var(--primary-black-color);
    background-color: var(--primary-text-color-footer);
  }
`;
