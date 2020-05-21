import styled from 'styled-components';
import { shade, lighten } from 'polished';

export const Container = styled.button`
  padding: 0 12px;
  border-radius: 2px;
  height: 56px;
  border: 0;
  background-color: #ff9000;
  color: #312e38;
  font-weight: 500;
  font-size: 1.1rem;
  transition: background-color 0.2s ease;
  transition: color 0.1s ease;
  margin: 8px 0 24px 0;

  &:hover {
    background-color: ${shade(0.1, '#ff9000')};
    color: #fff;
    box-shadow: 0 0 10px ${shade(0.5, '#312E38')};
  }
`;
