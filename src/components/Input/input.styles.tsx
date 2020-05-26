import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #212324;
  border: 1px solid #212324;
  border-radius: 2px;
  padding: 20px 16px;
  width: 100%;
  display: flex;
  align-items: center;

  ${props =>
    props.isFocused &&
    css`
      &:focus-within {
        svg {
          color: #ff9000;
        }
      }
      border: 1px solid #ff9000;
    `};

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
    color: #666360;
    ${props =>
      props.isFilled &&
      css`
        color: #ff9000;
      `};
  }

  input {
    flex: 1;
    background-color: #212324;
    color: #f9bf37;
    border: 0;

    &::placeholder {
      color: #666360;
      background-color: transparent;
    }
  }
`;
