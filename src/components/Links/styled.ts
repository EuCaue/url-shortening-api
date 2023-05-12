/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import * as colors from '../../assets/styles/configColors/colors';
import { SubmitButton } from '../ShortForm/styled';

type CopyLink = {
  copyLink: boolean;
};

export const SpanCopyLink = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: min-content;
  padding-right: 0.5rem;
`;

export const ShortenLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
  font-weight: 500;
  padding-right: 0.5rem;
  color: ${colors.cyan};
`;

export const OriginalLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  text-decoration: none;
  min-width: min-content;
  max-width: 50ch;
  word-break: break-all;
  color: ${colors.veryDarkViolet};
  :hover {
    color: ${colors.darkViolet};
  }
  padding-left: 1rem;
`;

export const CopyButton = styled(SubmitButton)<CopyLink>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  height: 1rem;
  background-color: ${(props) =>
    props.copyLink === true ? colors.darkViolet : colors.cyan};
`;

export const ShortLink = styled.section`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60em;
  margin-top: 1rem;
  margin-right: 3.5rem;
  z-index: 1;
  height: 9vh;
  border-radius: 5px;

  @media screen and (max-width: 60em) and (min-width: 20em) {
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    height: 100%;
    margin: 0;
    padding: 1rem;
    margin-top: 1rem;
    gap: 0.5rem;

    ${SpanCopyLink} {
      width: 100%;
      height: 4rem;
      align-items: center;
      text-align: center;
      align-self: self-start;
      flex-wrap: nowrap;
      flex-direction: column;
      gap: 0.5rem;
    }

    ${OriginalLink} {
      padding: 0;
      position: relative;
      &::before {
        content: '';
        border: 1px solid ${colors.gray};
        position: absolute;
        width: 105%;
        top: 105%;
      }
    }

    ${ShortenLink} {
      margin: 0;
      padding: 0;
    }

    ${CopyButton} {
      margin: 0;
    }
  }
`;
