/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import * as colors from '../../assets/styles/configColors/colors';
import boostDesktop from '../../assets/images/bg-boost-desktop.svg';
import { Link } from '../MiddlePage/styled';

interface Icon {
  icon: string;
}

export const WhiteHover = styled.span`
  border-radius: 2em;
  margin-top: 1.5em;
  :hover {
    background-color: white;
    opacity: 100%;
  }
`;

export const BlueLine = styled.div`
  position: absolute;

  z-index: -1;
`;

export const Container = styled.section`
  display: flex;
  align-items: center;
  z-index: 3;
  flex: 100%;
  justify-content: center;
  position: relative;

  div:nth-child(1) {
    margin-bottom: 4.8em;
    ${BlueLine} {
      width: 3.2em;
      border-style: solid;
      border-color: ${colors.cyan};
      margin-top: 8em;
      margin-left: 19.2em;
    }

    p {
      width: 102%;
    }
  }

  div:nth-child(2) {
    ${BlueLine} {
      width: 2.2em;
      border: solid;
      border-color: ${colors.cyan};
      margin-top: 5.5em;
      margin-left: 19.2em;
      z-index: -1;
    }
    span {
      top: 4.5em;
    }
    p {
      width: 102%;
    }
  }

  div:nth-child(3) {
    margin-top: 9em;
    span {
      top: 6.5em;
    }
  }
`;

export const Background = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 19.2em;
  margin-top: 4em;
  z-index: 2;
  margin-left: 2em;
  height: 190%;
  flex-wrap: wrap;
  border-radius: 4px;
`;

export const IconSVG = styled.span<Icon>`
  background-color: ${colors.darkViolet};
  background-image: url(${(props) => props.icon});
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  width: 4.5em;
  height: 4.5em;
  position: absolute;
  margin-left: 1.6em;
  top: 2em;
`;

export const H1 = styled.h1`
  padding-top: 3em;
  padding-left: 1em;
  color: ${colors.veryDarkViolet};
  text-align: left;
  font-weight: 700;
  font-size: 1.2em;
  justify-content: center;
`;

export const P = styled.p`
  color: ${colors.grayishViolet};
  font-weight: 500;
  padding-top: 1em;
  padding-left: 1.4em;
  padding-right: 1.4em;
  padding-bottom: 1.7em;
  font-size: 0.9em;
  text-align: left;
`;

export const H1Boost = styled.h1`
  font-size: 2em;
  color: #fff;
  margin-right: 1em;
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-top: 6em;
  text-align: center;
  align-items: center;
  height: 13.2em;
  background-image: url(${boostDesktop});
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${colors.darkViolet};
`;

export const LinkBottom = styled(Link)`
  border-radius: 2em;
  margin-top: 0;
  font-size: 1.4em;
  width: fit-content !important;

  :hover {
    opacity: 50%;
    cursor: pointer;
    transition: all 400ms ease-out;
  }
`;
