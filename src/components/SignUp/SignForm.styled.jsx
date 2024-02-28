import { Form, Field } from 'formik';
import styled, { css } from 'styled-components';
import { ReactComponent as ErrorSvg } from '../../assets/images/signSvg/error.svg';
import { ReactComponent as CheckSvg } from '../../assets/images/signSvg/done.svg';
import { NavLink } from 'react-router-dom';

const transition = '300ms cubic-bezier(0.46, 0.03, 0.52, 0.96)';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 335px;
  @media screen and (max-width: 374.98px) {
    padding-left: 20px;
    padding-right: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const Title = styled.h1`
  color: var(--primary-text-color-footer);
  font-size: 28px;
  font-weight: 600;
  line-height: 1.14;
  letter-spacing: -0.56px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const AuthForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 335px;
  @media screen and (min-width: 768px) {
    max-width: 400px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  display: block;
  padding: 18px 24px;
  border: 1px solid var(--primary-text-color-02);
  border-radius: 200px;
  outline: none;
  font-size: 14px;
  line-height: 1.28;
  color: var(--primary-text-color-05);
  background-color: transparent;
  transition: border ${transition};

  &:focus,
  &:hover {
    border: 1px solid var(--primary-text-color-05);
    color: var(--primary-text-color-05);
  }

  ${({ error }) =>
    error === 'true' &&
    css`
      border: 1px solid var(--primary-text-color-05);
    `}
  ${({ success }) =>
    success === 'true' &&
    css`
      border: 1px solid var(--green-success-color-05);
    `}
    
  @media screen and (min-width: 768px) {
    width: 100%;
    font-size: 17px;
    line-height: 1.56;
    padding: 14px 52px 14px 24px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Button = styled.button`
  position: relative;
  padding: 18px;
  background-color: var(--primary-text-color-footer);
  border-radius: 42px;
  color: var(--primary-black-color);
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28571;
  display: flex;
  justify-content: center;
  border: 1px solid var(--primary-text-color-05);
  cursor: pointer;
  transition:
    border ${transition},
    background-color ${transition};
  &:focus,
  &:hover {
    background-color: var(--grey-color);
    color: var(--primary-text-color-footer);
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.125;
  }
`;

export const ToggleButton = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;
  z-index: 10;
  border: none;
  position: absolute;
  top: 18px;
  right: 24px;
  padding: 0;
`;

export const ErrorText = styled.p`
  position: ${({ absolute, select }) =>
    absolute === 'true' || select === 'true' ? 'absolute' : 'static'};
  left: ${({ select }) => (select === 'true' ? 'unset' : '25px')};
  right: ${({ select }) => (select === 'true' ? '0' : 'unset')};
  bottom: -24px;
  color: #da1414;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;
  margin-left: ${({ absolute, select }) =>
    absolute === 'true' || select === 'true' ? '0' : '25px'};
  margin-top: ${({ absolute, select }) =>
    absolute === 'true' || select === 'true' ? '0' : '8px'};
  white-space: nowrap;
  text-align: ${({ select }) => (select === 'true' ? 'right' : 'left')};
`;

ErrorText.shouldForwardProp = (prop) => prop !== 'error';

export const ErrorSvgStyled = styled(ErrorSvg)`
  position: absolute;
  top: 18px;
  right: 24px;
`;

export const CheckSvgStyled = styled(CheckSvg)`
  position: absolute;
  top: 18px;
  right: 24px;
`;

export const Link = styled(NavLink)`
  color: var(--primary-text-color-footer);
  border: 1px solid var(--primary-text-color-05);

  position: relative;
  padding: 18px;
  background-color: var(--primary-text-color-footer);
  border-radius: 42px;
  display: flex;
  justify-content: center;
  border-radius: 42px;
  background-color: transparent;
  transition: border ${transition};

  &:focus,
  &:hover {
    background-color: var(--grey-color);
    border: 1px solid var(--primary-text-color-05);
  }
`;
