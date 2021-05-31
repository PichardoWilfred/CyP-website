import React from "react"
import styled from "styled-components"

import { device } from "../../../components/layout/responsive/device"

import { Trans } from "gatsby-plugin-react-i18next"
import Title from "../../layout/common/Title"

function Service() {
  return (
    <Section id="services">
      <Title center>
        <Trans>NUESTROS SERVICIOS</Trans>
      </Title>
      <Content></Content>
    </Section>
  )
}

export default Service
const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-content: flex-start;
  justify-content: center;

  padding: 0.5em 0;
  margin-top: 30vh;

  @media ${device.tablet} {
    /* height: 10vh; */
  }
`
const Content = styled.div`
  display: flex;
  margin-top: 0.5em;

  background-color: #0c2461;
  color: white;

  //Test
  width: 100%;
  height: 90vh;
  @media ${device.tablet} {
    width: 100%;
    height: 90vh;
  }
`
