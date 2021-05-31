import React from "react"
import styled, { keyframes } from "styled-components"

import phone from "../../../images/portrait/phone__icon.svg"
import mail from "../../../images/portrait/mail__icon.svg"

import { Trans } from "gatsby-plugin-react-i18next"

import { device } from "../responsive/device"

export default function Info({ mobile_visible }) {
  return (
    <ContactInfo visible={mobile_visible}>
      <ContactSection>
        <ContactIcon
          src={phone}
          size={"14px"}
          margin={"20px"}
          mobile_size={"18px"}
        />
        <ContactTitleBody>
          <ContactTitle>
            <Trans>TELÉFONOS</Trans>
          </ContactTitle>
          <ContactBody>(829) 651-6034</ContactBody>
          <ContactBody>(809) 543-6038</ContactBody>
        </ContactTitleBody>
      </ContactSection>

      <ContactSection>
        <ContactIcon
          src={mail}
          size={"21px"}
          margin={"12px"}
          mobile_size={"24px"}
        />
        <ContactTitleBody>
          <ContactTitle>
            <Trans>CORREO ELECTRÓNICO</Trans>
          </ContactTitle>
          <ContactBody>info@Carela&Pichardo.com</ContactBody>
        </ContactTitleBody>
      </ContactSection>
    </ContactInfo>
  )
}
const fade_in = keyframes`
  from {
    opacity:0;
  }

  to {
    opacity:1;  
  }
`
const ContactInfo = styled.div`
  display: ${props => (props.visible ? "none" : "flex")};
  flex-direction: column;
  justify-content: space-evenly;
  align-content: center;
  width: 25%;

  @media ${device.tablet} {
    display: ${props => (props.visible ? "block" : "none")};
    align-items: center;
    width: 60%;
  }

  animation: ${fade_in} 1s ease-out 1;
`
const ContactSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0.05em 0;
  @media ${device.tablet} {
    padding: 1.2em 0;
  }
`
const ContactTitleBody = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`
const ContactIcon = styled.img`
  width: ${props => props.size};
  margin-right: ${props => props.margin};
  align-self: start;
  @media ${device.tablet} {
    width: ${props => props.mobile_size};
    margin-top: 4px;
  }
`
const ContactTitle = styled.h2`
  font-family: "Lato";
  font-size: 0.4em;
  font-weight: 600;

  color: white;
  opacity: 70%;

  align-items: space-between;
  @media ${device.tablet} {
    font-size: 1.2em;
  }
`
const ContactBody = styled.p`
  font-size: clamp(12px, 0.6em, 50px);
  color: white;
  @media ${device.tablet} {
    font-size: 1.5em;
  }
`
