import React from "react"
import styled from "styled-components"

import { device } from "../../../components/layout/responsive/device"
import Title from "../../layout/common/Title"
import LocationTitle from "./LocationTitle"
import Form from "../Contact/Form"

export default function Contact() {
  return (
    <Section>
      <Form>
        <Title>CONTÁCTANOS</Title>
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

  /* padding: 0 0 0 1em; */

  height: 100vh;
  /* width: 100vw; */

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
