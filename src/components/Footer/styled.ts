/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import * as colors from '../../assets/styles/configColors/colors';

export const ShortlyLogo = styled.span`
  position: absolute;
  top: 6em;
  margin-left: -45em;
  display: flex;
  margin-right: 16em;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 4em;
  text-decoration: none;
  list-style-type: none;
  li {
    margin-top: 0.1em;
  }
`;

// NOTE: h1 for the li's
export const H1 = styled.h1`
  color: white;
  font-size: 0.9em;
  padding-bottom: 1em;
`;

// NOTE: anchor in the li's
export const LinkLi = styled.a`
  text-decoration: none;
  color: ${colors.gray};
  font-weight: 500;
  font-size: 0.8em;

  :hover {
    cursor: pointer;
    color: ${colors.cyan};
    transition: all 400ms ease-out;
  }
`;

// NOTE: SVG below footer
export const FlexIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-self: center;
  margin-left: 4em;
  margin-bottom: 5em;
  transition: all 0.9s ease;
  width: 10%;

  svg {
    display: flex;
    align-items: center;
    align-self: center;
    width: 100%;
    gap: 2rem;
  }

  a {
    height: 0;
    width: auto;
    :hover {
      svg {
        path {
          transition: all 0.4s ease;
          fill: ${colors.cyan};
        }
      }
    }
  }
`;

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.veryDarkViolet};
  padding-top: 4em;
  padding-bottom: 4em;
  position: relative;
  ul:nth-child(4) {
    h1 {
      margin-top: 2em;
    }
  }
  @media screen and (max-width: 60em) and (min-width: 20em) {
    flex-direction: column;

    ul:nth-child(2) {
      h1 {
        padding-bottom: 1em;
        padding-top: 2em;
      }
    }
    ul:nth-child(3) {
      h1 {
        padding-top: 2em;
      }
    }

    ${ShortlyLogo} {
      margin: 0;
      top: 0;
      margin-top: 2em;
      margin-bottom: 2em;
    }

    ${Ul} {
      position: relative;
      align-items: inherit;
      margin-left: 0;
      li {
        margin-top: 0.5em;
      }
    }

    ${FlexIcons} {
      display: flex;
      width: 50%;
      margin: 0;
      justify-content: center;
      margin-top: 2em;
      margin-left: 22vw;
      align-self: flex-start;

      svg {
        margin-left: 1.5em;
      }
    }
  }
`;
