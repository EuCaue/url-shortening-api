/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

import * as colors from '../../assets/styles/configColors/colors';
import ImgBoost from '../../assets/images/bg-shorten-desktop.svg';

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputBox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 140%;
  border-radius: 5px;
  border: none;

  ::placeholder {
    padding: 2em;
  }
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Form = styled.form`
  background-image: url(${ImgBoost});
  background-color: ${colors.darkViolet};
  background-repeat: no-repeat;
  background-position: right;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translateY(6em) translateX(6em);
  width: 79%;
  height: 17%;
`;
