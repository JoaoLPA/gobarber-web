import styled from 'styled-components';
import { shade } from 'polished';

import signinBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;

  a {
    color: ${shade(0.5, '#fff')};
    text-decoration: none;
    font-size: 0.6rem;
    transition: color 0.2s ease;

    &:hover {
      color: #ff9000;
    }
  }

  > a {
    color: #f9bf37;
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.2s ease;

    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: #ff9000;

      svg {
        stroke: #fff;
      }
    }
  }

  h1 {
    margin-bottom: 24px;
  }

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
    display: flex;
    flex-direction: column;
  }

  img {
  }
`;

export const Background = styled.div`
  flex: 1;
  background-image: url(${signinBackground});
  background-size: cover;
  background-position: center;
`;
