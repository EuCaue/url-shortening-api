/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import * as colors from '../../assets/styles/configColors/colors';
import ImgBoost from '../../assets/images/bg-shorten-desktop.svg';
import ImgShortenMobile from '../../assets/images/bg-shorten-mobile.svg';

type Props = {
  error: boolean;
};

type CopyLink = {
  copyLink: boolean;
};

export const WhiteHover = styled.span`
  z-index: 1;
  /* width: 9.6em; */
  margin-left: 1.2em;
  border-radius: 5px;
  :hover {
    background-color: white;
    opacity: 100%;
  }
`;

export const SubmitButton = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.cyan};
  border: none;
  color: #fff !important;
  border-radius: 5px;
  height: 3em;
  padding: 1em 1.5em;
  /* margin-left: 1.2em; */
  font-weight: 700;
  :hover {
    cursor: pointer;
    opacity: 50%;
    transition: all 400ms ease-out;
  }
  z-index: 3;
`;

export const InputBox = styled.input<Props>`
  display: flex;
  position: relative;
  outline: none;
  align-items: center;
  justify-content: center;
  width: 45em;
  height: 3em;
  border-radius: 5px;
  border: ${(props) => (props.error === false ? 'none' : 'solid')};
  border-color: ${colors.red};
  ::placeholder {
    color: ${(props) =>
      props.error === false ? `current/* Co */lor` : `${colors.red}`};
    padding: 1.5em;
    font-size: 16px;
  }
  ::-moz-placeholder {
    color: ${(props) =>
      props.error === false ? 'currentColor' : `${colors.red}`};
    padding: 1.5em;
    font-size: 16px;
  }
`;

export const Small = styled.small<Props>`
  flex: 0;
  flex-basis: 100%;
  font-size: 0.7em;
  content: 'Please add a link';
  margin-left: 4.5em;
  color: ${colors.red};
  flex-wrap: wrap;
`;

export const Span = styled.span<Props>`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: ${(props) => (props.error === false ? '0' : '1.3em')};
`;

export const Form = styled.form`
  background-image: url(${ImgBoost});
  background-color: ${colors.darkViolet};
  background-position: left -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  margin-top: 2em;
  margin-right: 3.5em;
  width: 60em;
  height: 7em;
`;

export const ShortLink = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60em;
  margin-top: 1em;
  margin-right: 3.5em;
  z-index: 1;
  height: 3em;
  border-radius: 5px;
`;

export const ShortenLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  color: ${colors.cyan};
`;

export const OriginalLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: ${colors.veryDarkViolet};
  :hover {
    color: ${colors.darkViolet};
  }
  margin-left: 1em;
`;

export const CopyButton = styled(SubmitButton)<CopyLink>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  padding: 1em 1.5em;
  height: 1rem;
  background-color: ${(props) =>
    props.copyLink === true ? colors.darkViolet : colors.cyan};
`;

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.5em;
  text-align: center;
  color: ${colors.veryDarkViolet};
  font-size: 1.8em;
`;

export const P = styled.p`
  text-align: center;
  color: gray;
  width: 29em;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 0;
  height: 100%;

  @media screen and (max-width: 60em) and (min-width: 20em) {
    margin-top: 4.5em;
    ${Form} {
      background-image: url(${ImgShortenMobile});
      background-repeat: no-repeat;
      background-position: top right;
      width: 90%;
      margin: auto;
      height: 11em;
      border-radius: 10px;
    }

    ${Span} {
      flex-direction: column;
    }

    ${InputBox} {
      width: 85%;
      /* height: 2.5em; */
      margin-bottom: 2.5em;
      ::placeholder {
        font-weight: 500;
        opacity: 50%;
      }
    }
    ${SubmitButton} {
      width: 94%;
      text-align: center;
      margin-right: 8.9em;
      margin-bottom: 1em;
    }
    ${Small} {
      /* flex: 0; */
      /* flex-shrink: 50%; */
      /* flex-basis: 50%; */
      /* flex-wrap: nowrap; */
      margin-left: 0;
      position: absolute !important;
      left: 15%;
      top: 100%;
    }
  }
`;
