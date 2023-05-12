/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import * as colors from '../../assets/styles/configColors/colors';
import ImgBoost from '../../assets/images/bg-shorten-desktop.svg';
import ImgShortenMobile from '../../assets/images/bg-shorten-mobile.svg';

type Props = {
  error: boolean;
};

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: #fff !important;
  border-radius: 5px;
  height: 3em;
  padding: 1em 1.5em;
  font-weight: 700;
  position: relative;
  transition: all 0.4s ease;
  z-index: 3;
  background-color: ${colors.cyan};
`;

// InputBox
export const InputBox = styled.input<Props>`
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  padding-left: 0.5rem;
  width: 45em;
  height: 3em;
  border-radius: 5px;
  border: ${(props) => (props.error === false ? 'none' : 'solid')};
  border-color: ${colors.red};
  ::placeholder {
    color: ${(props) =>
      props.error === false ? `currentColor` : `${colors.red}`};
    font-size: 16px;
  }
  ::-moz-placeholder {
    color: ${(props) =>
      props.error === false ? 'currentColor' : `${colors.red}`};
    font-size: 16px;
  }
  ::-webkit-input-placeholder {
    color: ${(props) =>
      props.error === false ? 'currentColor' : `${colors.red}`};
    font-size: 16px;
  }
`;

export const Small = styled.small`
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
  position: relative;
  flex-wrap: wrap;
  justify-content: space-evenly;
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

export const H1 = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.5em;
  text-align: center;
  color: ${colors.veryDarkViolet};
  font-size: 1.8rem;
`;

export const P = styled.p`
  text-align: center;
  color: gray;
  width: 29em;
  font-weight: 500;
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
      flex-direction: row;
      padding-top: 1.3em;
    }

    ${InputBox} {
      width: 85%;
      margin-bottom: 2.5em;
      ::placeholder {
        font-weight: 500;
        opacity: 50%;
      }
    }

    ${SubmitButton} {
      width: 85%;
      text-align: center;
      margin-bottom: 1em;
    }

    ${Small} {
      margin-left: 0;
      position: absolute !important;
      left: 8%;
      margin-top: 0.6em;
      top: 40%;
    }

    ${H1} {
      width: 90%;
      margin-top: 2em;
      font-size: 1.5rem;
      padding-bottom: 1rem;
    }
    ${P} {
      /* width: 90%; */
      width: 20em;
      font-size: 16px;
    }
  }
`;
