/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import * as colors from '../../assets/styles/configColors/colors';
import ImgBoost from '../../assets/images/bg-shorten-desktop.svg';

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.cyan};
  border: none;
  color: #fff !important;
  border-radius: 5px;
  height: 2.5em;
  padding: 1em 1.5em;
  /* transform: translateX(1.5em); */
  margin-left: 15px;
  color: ${colors.grayishViolet};
  font-weight: 700;
  :hover {
    cursor: pointer;
    color: ${colors.veryDarkViolet};
    transition: all 400ms ease;
    -webkit-filter: brightness(0.9) saturate(0.8) contrast(0.9);
    -moz-filter: brightness(0.9) saturate(0.8) contrast(0.9);
    -o-filter: brightness(0.9) saturate(0.8) contrast(0.9);
    -ms-filter: brightness(0.9) saturate(0.8) contrast(0.9);
    filter: brightness(0.9) saturate(0.8) contrast(0.9);
    transition: all 400ms ease-out;
  }
`;

export const InputBox = styled.input`
  display: flex;
  outline: none;
  align-items: center;
  justify-content: center;
  width: 45em;
  height: 2.5em;
  border-radius: 5px;
  border: none;

  ::placeholder {
    padding: 1.5em;
    font-size: 16px;
  }
  ::-moz-placeholder {
    padding: 1.5em;
    font-size: 16px;
  }
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background-image: url(${ImgBoost});
  background-color: ${colors.darkViolet};
  background-position: left -15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  /* transform: translateY(6em) translateX(6em); */
  margin-top: 2em;
  margin-left: 6em;
  width: 60em;
  height: 7em;
`;

export const Container = styled.div`
  background-color: ${colors.gray};
  z-index: 0;
  height: 90%;
`;

export const ShortLink = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60em;
  margin-top: 1em;
  margin-left: 6em;
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

export const CopyButton = styled(SubmitButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
  height: 1rem;
`;
