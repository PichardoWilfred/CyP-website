import React from "react"
import styled from "styled-components"
import { Trans } from "gatsby-plugin-react-i18next"

import { device } from "../../../components/layout/responsive/device"
import Title from "../../layout/common/Title"
import LocationTitle from "./LocationTitle"
import Form from "../Contact/Form"

export default function Contact() {
  return (
    <Section id="contact">
      <Form>
        <Title>
          <Trans>CONTACTO</Trans>
        </Title>
      </Form>
      <Location>
        <LocationTitle></LocationTitle>
        <Map
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3483.255761648832!2d-70.69849384068009!3d19.45020731403216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1cf5eafa08d11%3A0x6aaa2c347fc9d36c!2sParada%20Autobuses%20San%20Francisco!5e0!3m2!1ses-419!2sdo!4v1622493093093!5m2!1ses-419!2sdo"
          allowfullscreen=""
          loading="lazy"
        ></Map>
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
  padding: 20px;
  @media ${device.tablet} {
    width: 100%;
    height: 100vh;
  }
`

const Map = styled.iframe`
  border: 0;
  width: 100%;
  height: 90%;
  @media ${device.tablet} {
    width: 100%;
    height: 85%;
  }
`
