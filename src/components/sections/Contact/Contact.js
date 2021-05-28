import React from "react"
import styled from "styled-components"
import { Trans } from "gatsby-plugin-react-i18next"

import { device } from "../../../components/layout/responsive/device"
import Title from "../../layout/common/Title"
import LocationTitle from "./LocationTitle"
import Form from "../Contact/Form"

export default function Contact() {
  return (
    <Section>
      <Form>
        <Title>
          <Trans>CONTACTO</Trans>
        </Title>
      </Form>
      <Location>
        <LocationTitle></LocationTitle>
      </Location>
    </Section>
  )
}

const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media ${device.tablet} {
    padding: 0;
    padding-top: 2em;
    height: 100%;
  }
`

const Location = styled.div`
  width: 45%;
  background-color: #0c2461;
  @media ${device.tablet} {
    width: 100%;
    height: 100vh;
  }
`
