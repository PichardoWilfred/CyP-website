import React from "react"

import styled from "styled-components"
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
        Entrada Coconut Palms, Urb. Vista del Caribe Cabarete, Puerto Plata,
        Rep. Dom.
      </Address>
    </WhiteStripe>
  )
}
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

  //------------------------------------------------------------------------
  @media ${device.tablet} {
    background: url(${structure}) left -8em top 4em no-repeat,
      url(${artemisa}) top 2em right -1em no-repeat;
    background-size: 17em, 10em;
    padding: 7em 0em;
    height: 50%; //delete overflow-x
  }
`

const Description = styled.h1`
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
  font-weight: 300;
  width: 50%;
  padding: 0 0em;
  font-size: 0.6em;
  @media ${device.tablet} {
    width: 90%;
    font-size: 1em;
  }
`
