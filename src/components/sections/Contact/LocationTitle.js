import React from "react"
import styled from "styled-components"
import { Trans } from "gatsby-plugin-react-i18next"

export default function LocationTitle() {
  return (
    <TitleArea id="location">
      <Title>
        <Trans>NUESTRA UBICACIÓN</Trans>
      </Title>
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
