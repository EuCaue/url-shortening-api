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
  border-radius: 0.4em;
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
  width: 43em;
  height: 2.5em;
  border-radius: 5px;
  border: none;

  ::placeholder {
    padding: 1em;
    font-size: 15px;
  }
  ::-moz-placeholder {
    padding: 1em;
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
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transform: translateY(6em) translateX(6em);
  width: 60em;
  height: 7em;
`;
