/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import * as colors from '../../assets/styles/configColors/colors';

export const Img = styled.img`
  align-items: center;
  justify-content: center;
  margin-top: 2em;
`;

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3.5rem;

  width: 7.39em;
  color: ${colors.veryDarkBlue};
`;

export const H2 = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25em;
  color: ${colors.grayishViolet};
  font-weight: 500;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #fff !important;
  border-radius: 2em;
  padding: 0.5em 1.5em;
  text-decoration: none;
  width: fit-content;
  font-weight: 700;
  background-color: ${colors.cyan};
  color: ${colors.grayishViolet};
`;

export const Span = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  margin-left: 15em;
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12em;
  @media screen and (max-width: 60em) and (min-width: 20em) {
    flex-direction: column-reverse;
    gap: 0;
    ${Img} {
      margin-left: 10em;
      width: 29em;
    }
    ${H1} {
      font-size: 2.2rem;
      margin-right: 7em;
      text-align: center;
      padding-top: 1em;
    }

    ${H2} {
      width: 19em;
      text-align: center;
      margin-left: -1em;
      font-size: 1rem;
    }

    ${Button} {
      margin-left: 2.5em;
      width: 12em;
      height: 3em;
    }
  }
`;
