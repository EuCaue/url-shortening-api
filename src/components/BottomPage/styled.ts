/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import * as colors from '../../assets/styles/configColors/colors';
import iconBrand from '../../assets/images/icon-brand-recognition.svg';

interface Icon {
  icon: string;
}

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  float: inherit;
  background-color: ${colors.gray};
  background-color: lightgray;
	/* height: 2em; */
`;

export const Background = styled.div`
  background-color: #fff;
  /* display: inline-flex !important; */
  width: 19em;
  margin-top: 4em;
  margin-left: 6em;
  height: 120%;
`;

export const Span = styled.span`
  display: block;
  border-radius: 2em;
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
  padding: 1em;
  margin-left: 1em;
  top: 2em;
`;

export const H1 = styled.h1`
  /* padding: 1em; */
  padding-top: 4em;
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
  padding: 1em;
  padding-left: 1.3em;
  height: 50%;
  font-size: 0.9em;
  text-align: left;
`;
