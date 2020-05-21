import styled from 'styled-components';

export const Container = styled.div`
  background-color: #212324;
  border: 1px solid #212324;
  border-radius: 2px;
  padding: 20px 16px;
  width: 100%;
  display: flex;
  align-items: center;

  &:focus-within {
    svg {
      color: #f9bf37;
    }
  }

  & + div {
    margin-top: 8px;
  }

  svg {
    margin-right: 16px;
    color: #666360;
  }

  input {
    flex: 1;
    background-color: transparent;
    color: #f9bf37;
    border: 0;

    &::placeholder {
      color: #666360;
    }
  }
`;
