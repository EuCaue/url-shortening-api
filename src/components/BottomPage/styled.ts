/* eslint-disable no-use-before-define */
/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import * as colors from '../../assets/styles/configColors/colors'
import boostDesktop from '../../assets/images/bg-boost-desktop.svg'
import boostMobile from '../../assets/images/bg-boost-mobile.svg'
import { Link } from '../MiddlePage/styled'

interface Icon {
  icon: string
}

// whitehover on buttons
export const WhiteHover = styled.span`
  border-radius: 10em;
  border-radius: 2em;
  margin-top: 1.5em;
  :hover {
    background-color: white;
    opacity: 100%;
  }
`

// the blueline between the Background
export const BlueLine = styled.div`
  display: flex;
  position: absolute;

  z-index: -1;
` // Container Flex
export const ContainerFlex = styled.section`
  display: flex;
  align-items: center;
  z-index: 3;
  flex: 100%;
  justify-content: center;
  position: relative;

  /* The first boxWithIcon */
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

  /* The second boxWithIcon */
  div:nth-child(2) {
    ${BlueLine} {
      width: 2.2em;
      border: solid;
      border-color: ${colors.cyan};
      margin-top: 5.5em;
      margin-left: 19.2em;
      z-index: -1;
    }

    /* IconSVG */
    span {
      top: 4.5em;
    }
    p {
      width: 102%;
    }
  }

  /* The third boxWithIcon */
  div:nth-child(3) {
    margin-top: 9em;

    /* IconSVG */
    span {
      top: 6.5em;
    }
  }
`

// Background div for boxWithIcon
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
`

// IconSVG
export const IconSVG = styled.span<Icon>`
  background-color: ${colors.darkViolet};
  background-image: url(${(props) => props.icon});
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  display: flex;
  width: 4.5em;
  height: 4.5em;
  position: absolute;
  margin-left: 1.6em;
  top: 2em;
`

// H1 below the IconSVG
export const H1 = styled.h1`
  padding-top: 3em;
  padding-left: 1em;
  color: ${colors.veryDarkViolet};
  text-align: left;
  font-weight: 700;
  font-size: 1.2em;
  justify-content: center;
`

// P below the IconSVG
export const P = styled.p`
  color: ${colors.grayishViolet};
  font-weight: 500;
  padding-top: 1em;
  padding-left: 1.4em;
  padding-right: 1.4em;
  padding-bottom: 1.7em;
  font-size: 0.9em;
  text-align: left;
`

// H1 for "Boost your links today"
export const H1Boost = styled.h1`
  font-size: 2em;
  color: #fff;
  margin-right: 1em;
`

// Backoground div image
export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-top: 6em;
  text-align: center;
  align-items: center;
  height: 13.2em;
  width: 100%;
  background-image: url(${boostDesktop});
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${colors.darkViolet};
`

// "Get Started button"
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
`

// Container || MediaQueries
export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 60em) and (min-width: 20em) {
    ${ContainerFlex} {
      width: 90%;
      flex-direction: column;
    }

    ${IconSVG} {
      display: flex;
      align-self: center;
      margin-left: 0;
    }

    ${Background} {
      justify-content: center;
      margin: 0;
    }
    ${H1} {
      text-align: center;
      padding-top: 3.5em;
      padding-left: 0;
    }
    ${P} {
      /* text space padding */
      padding-left: 2em;
      padding-right: 2em;
      padding-bottom: 2.5em;
      text-align: center;
    }

    /* First boxWithIcon */
    div:nth-child(1) {
      margin-top: 4em;
      ${BlueLine} {
        width: 0;
        margin: 0;
        margin-top: 18em;
        height: 3.5em;
        align-self: center;
      }
    }

    /* Second boxWithIcon */
    div:nth-child(2) {
      display: flex;
      span {
        align-self: center;
        top: 21em;
      }
      ${BlueLine} {
        width: 0;
        margin: 0;
        margin-top: 19.3em;
        height: 3.5em;
        z-index: -1;
        align-self: center;
      }
    }

    /* Third boxWithIcon */
    div:nth-child(3) {
      margin: 0;
      margin-top: 4em;
      span {
        top: 41.5em;
        align-self: center;
      }
      ${P} {
        padding-right: 1em;
        padding-left: 1em;
      }
    }

    ${DivImage} {
      margin-top: 4em;
      background-image: url(${boostMobile});
      background-repeat: space;
      background-size: cover;
      background-position: left;
      height: 16.5em;
    }
    ${LinkBottom} {
      font-size: 1.25rem;
    }

    ${H1Boost} {
      line-height: calc(100% + 0.5em);
      font-size: 1.5rem;
      text-align: center;
      margin: 0;
      width: 100%;
    }

    ${WhiteHover} {
      margin-top: 1em;
    }
  }
`
