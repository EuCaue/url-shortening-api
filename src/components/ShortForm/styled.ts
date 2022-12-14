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

// NOTE: whitehover in the buttons
export const WhiteHover = styled.span`
  z-index: 1;
  margin-left: 1.2em;
  border-radius: 5px;
  :hover {
    background-color: white;
    opacity: 100%;
  }
`;

// SubmitButton
export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.cyan};
  border: none;
  color: #fff !important;
  border-radius: 5px;
  height: 3em;
  padding: 1em 1.5em;
  font-weight: 700;
  :hover {
    cursor: pointer;
    opacity: 50%;
    transition: all 400ms ease-out;
  }
  z-index: 3;
`;

// InputBox
export const InputBox = styled.input<Props>`
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  width: 45em;
  height: 3em;
  border-radius: 5px;
  border: ${(props) => (props.error === false ? 'none' : 'solid')};
  border-color: ${colors.red};
  /* NOTE: placeholder */
  ::placeholder {
    color: ${(props) =>
      props.error === false ? `currentColor` : `${colors.red}`};
    padding: 1.5em;
    font-size: 16px;
  }
  ::-moz-placeholder {
    color: ${(props) =>
      props.error === false ? 'currentColor' : `${colors.red}`};
    padding: 1.5em;
    font-size: 16px;
  }
  ::-webkit-input-placeholder {
    color: ${(props) =>
      props.error === false ? 'currentColor' : `${colors.red}`};
    padding: 1.5em;
    font-size: 16px;
  }
`;

// NOTE: text with the link it's not valid
export const Small = styled.small`
  flex: 0;
  flex-basis: 100%;
  font-size: 0.7em;
  content: 'Please add a link';
  margin-left: 4.5em;
  color: ${colors.red};
  flex-wrap: wrap;
`;

// NOTE: span flex for the components inside of the form
export const Span = styled.span<Props>`
  display: flex;
  align-items: center;
  position: relative;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: ${(props) => (props.error === false ? '0' : '1.3em')};
`;

// span flex for the copylink
export const SpanCopyLink = styled.span`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`;

// Form
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

// ResponseApi div
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
  position: relative;
  border-radius: 5px;
`;

// box with the shorten link
export const ShortenLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  font-weight: 500;
  color: ${colors.cyan};
`;

// box with the original link
export const OriginalLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  text-decoration: none;
  color: ${colors.veryDarkViolet};
  :hover {
    color: ${colors.darkViolet};
  }
  margin-left: 1em;
`;

// copybutton
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

// h1 below the shortLink
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

// mobile grayline in the shortlink
export const GrayLine = styled.span`
  position: relative;
`;

// Container && mediaquerie
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
      width: 94%;
      text-align: center;
      margin-right: 8.9em;
      margin-bottom: 1em;
      :hover {
        opacity: 100%;
      }
    }

    ${WhiteHover} {
      width: 90%;
      :hover {
        opacity: 100%;
        background-color: initial;
      }
    }

    ${Small} {
      margin-left: 0;
      position: absolute !important;
      left: 8%;
      margin-top: 0.6em;
      top: 40%;
    }

    ${ShortLink} {
      flex-direction: column;
      width: 90%;
      justify-content: left;
      align-items: left;
      flex-wrap: wrap;
      height: 100%;
      margin: 0;
      padding: 1em;
      margin-top: 1em;
    }

    ${SpanCopyLink} {
      width: 100%;
      justify-content: left;
      text-align: left;
      align-self: flex-start;
      margin-top: 1em;
      margin-right: 2em;
    }

    ${OriginalLink} {
      display: flex;
      align-self: flex-start;
      margin-left: 0;
      margin-right: 5em;
    }

    ${ShortenLink} {
      margin: 0;
    }

    ${CopyButton} {
      padding: 1.3em 2em;
      margin: 0;
      margin-top: 1em;
      width: 120%;
    }

    ${GrayLine} {
      background-color: ${colors.gray};
      /* width: clamp(min(100% + 4vmax), 106%, max(109% - 9vmax)); */
      position: absolute;
      top: 2em;
      height: 0.05em;
      /* right: -1em; */
      display: flex;
      margin-top: 0.5em;
      align-self: normal;
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
