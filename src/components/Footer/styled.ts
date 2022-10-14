/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import * as colors from '../../assets/styles/configColors/colors';

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.veryDarkViolet};
  padding-top: 4em;
  padding-bottom: 4em;
  position: relative;

  ul:nth-child(4) {
    h1 {
      margin-top: 2em;
    }
  }
`;

export const SVG = styled.path`
  :hover {
    fill: ${colors.cyan};
  }
`;

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

export const Li = styled.li``;

export const H1 = styled.h1`
  color: white;
  font-size: 0.9em;
  padding-bottom: 1em;
`;

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

export const FlexIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-left: 4em;
  svg {
    margin-bottom: 5em;
    margin-left: 2em;
  }

  a {
    height: 0%;
    width: 0%;
    background-color: red;
    :hover {
      svg {
        path {
          fill: ${colors.cyan};
        }
      }
    }
  }
`;
