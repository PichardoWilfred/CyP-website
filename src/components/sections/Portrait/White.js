import React from "react"
import styled, { keyframes } from "styled-components"
import { Trans } from "gatsby-plugin-react-i18next"

import artemisa from "../../../images/portrait/Artemisa.svg"
import structure from "../../../images/portrait/Structure.svg"
import { device } from "../../layout/responsive/device"

export default function White() {
  return (
    <WhiteStripe>
      <Description>
        Título de la Compañía o frase en cuestión para la identidad la identidad
        la identidad
      </Description>
      <Address>
        <Trans>Entrada Coconut Palms, Urb. Vista del Caribe,</Trans>
        {""} Cabarete, Puerto Plata, <Trans>Rep. Dom.</Trans>
      </Address>
    </WhiteStripe>
  )
}

const duration = `0.8s`
const fade_in_up = keyframes`
  from {
    opacity:0;
    transform: translateY(-60px);
  }

  to {
    opacity:1;  
    transform: translateY(0);
  }
`
const fade_in_bg = keyframes`
  from {
    opacity:0;
    background-position: left -10em top 2em, top 0.5em right -6em;
  }

  to {
    opacity:1;
    background-position: left -5em top 2em, top 0.5em right -3em;
  }
`
const fade_in_bgM = keyframes`
  from {
    opacity:0;
    background-position: left -20em 4em no-repeat, top 0.5em  right -1em no-repeat ;
  }

  to {
    opacity:1;
    background-position: left -8em top 4em no-repeat, top 2em right -1em no-repeat;
  }
`

const fade_in = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;  
  }
`
const WhiteStripe = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  height: 50%;
  width: 100%;

  padding: 3em 0.5em;

  justify-content: center;
  align-content: center;

  text-align: center;
  color: #1e3799;

  background: url(${structure}) left -5em top 2em no-repeat,
    url(${artemisa}) top 0.5em right -3em no-repeat;
  background-size: 12em, 10em;

  animation: ${fade_in_bg} ${duration} ease-out 1;
  //------------------------------------------------------------------------
  @media ${device.tablet} {
    background: url(${structure}) left -8em top 4em no-repeat,
      url(${artemisa}) top 2em right -1em no-repeat;
    background-size: 17em, 10em;
    padding: 7em 0em;
    height: 50%; //delete overflow-x

    animation: ${fade_in_bgM} ${duration} ease-out 1;
  }
`

const Description = styled.h1`
  animation: ${fade_in_up} ${duration} ease-out 1;
  font-size: clamp(16px, 1em, 50px);
  font-family: "Playfair Display";
  font-weight: bold;
  width: 70%;
  padding: 0em 3em;
  @media ${device.tablet} {
    width: 80%;
    font-size: 0.6em;
    font-size: 1.5em;
    padding: 0em 0em;
  }
`

const Address = styled.address`
  animation: ${fade_in} 2s ease-out;
  font-weight: 300;
  width: 40%;
  padding: 0 0em;
  font-size: 0.6em;
  @media ${device.tablet} {
    width: 90%;
    font-size: 1em;
  }
`
