import React from "react"
import styled from "styled-components"
import { device } from "../../../components/layout/responsive/device"

export default function LocationTitle() {
  return (
    <TitleArea>
      <Title>NUESTRA UBICACIÓN</Title>
    </TitleArea>
  )
}

const Title = styled.h1`
  font-family: "Lato";
  font-size: min(2em, 2.5rem);
  color: white;

  word-spacing: 0.5em;
`

const TitleArea = styled.div`
  width: 100%;
  text-align: center;
  padding: 0.5rem;
  margin-top: 1rem;
`
