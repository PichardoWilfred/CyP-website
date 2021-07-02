import React, { useState } from "react"
import styled from "styled-components"
import { Trans } from "gatsby-plugin-react-i18next"
//Email-Handler
import emailjs from "emailjs-com"

import { device } from "../../../components/layout/responsive/device"
import Title from "../../layout/common/Title"
import LocationTitle from "./LocationTitle"
import Form from "../Contact/Form"

export default function Contact() {
  // const [success, setSucess] = useState(false)

  // const delay = ms =>
  //   new Promise(resolve => {
  //     setTimeout(resolve, ms)
  //   })

  // async function changeStyle(reset) {
  //   setSucess(true)
  //   await delay(1000)
  //   reset()
  //   setSucess(false)
  // }

  // const sendEmail = (data, e) => {
  //   emailjs
  //     .sendForm(
  //       "service_s6w8x57",
  //       "carelaYpichardo_temp",
  //       e.target,
  //       "user_t5yip53PAJkGwGOXpZlxf"
  //     )
  //     .then(
  //       () => {
  //         e.target.reset()
  //         changeStyle()
  //         console.log("Todo nítido mi hermano 👍")
  //       },
  //       error => {
  //         console.log("JeJe", error)
  //       }
  //     )
  // }

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
          title="location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.553455610545!2d-70.44625268508801!3d19.774117986691202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDQ2JzI2LjgiTiA3MMKwMjYnMzguNiJX!5e0!3m2!1ses-419!2sdo!4v1622494491117!5m2!1ses-419!2sdo"
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
  padding: 0 30px;
  @media ${device.tablet} {
    width: 100%;
    height: 100vh;
    padding: 0 10px;
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
